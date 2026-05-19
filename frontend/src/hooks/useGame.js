// src/hooks/useGame.js
import { useState, useEffect, useRef, useCallback } from 'react'
import { WORLDS, TIMER_MAX, getRank, getPoints } from '../data/worlds'

const API = 'http://127.0.0.1:5000/api'
const INITIAL_STATE = {
  screen: 'intro',       // intro | world-intro | question | world-end | final
  worldIndex: 0,
  questionIndex: 0,
  score: 0,
  worldScore: 0,
  worldScores: [],
  totalCorrect: 0,
  timeLeft: TIMER_MAX,
  answered: false,
  selectedChoice: null,
  playerId: null,
  username: '',
}

export function useGame() {
  const [state, setState] = useState(INITIAL_STATE)
  const timerRef = useRef(null)

  const currentWorld    = WORLDS[state.worldIndex]
  const currentQuestion = currentWorld?.questions[state.questionIndex]
  const totalQuestions  = WORLDS.reduce((s, w) => s + w.questions.length, 0)

  // ── Timer ──────────────────────────────────────────────
  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current)
  }, [])

  const startTimer = useCallback(() => {
    stopTimer()
    setState(s => ({ ...s, timeLeft: TIMER_MAX }))
    timerRef.current = setInterval(() => {
      setState(s => {
        if (s.answered) { clearInterval(timerRef.current); return s }
        const next = s.timeLeft - 1
        if (next <= 0) {
          clearInterval(timerRef.current)
          return { ...s, timeLeft: 0, answered: true, selectedChoice: -1 }
        }
        return { ...s, timeLeft: next }
      })
    }, 1000)
  }, [stopTimer])

  useEffect(() => () => stopTimer(), [stopTimer])

  // ── Actions ────────────────────────────────────────────
  function setUsername(name) {
    setState(s => ({ ...s, username: name }))
  }

  async function startGame() {
    // Créer ou récupérer le joueur via l'API
    let playerId = null
    if (state.username) {
      try {
        const res  = await fetch(`${API}/player`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: state.username }),
        })
        const data = await res.json()
        playerId   = data.id
      } catch (error) {
  console.warn('Backend non disponible:', error)
}
    }
    setState({
      ...INITIAL_STATE,
      screen: 'world-intro',
      username: state.username,
      playerId,
    })
  }

  function startWorld() {
    setState(s => ({ ...s, screen: 'question', questionIndex: 0, worldScore: 0 }))
    startTimer()
  }

  function answer(choiceIndex) {
    if (state.answered) return
    stopTimer()

    const correct = choiceIndex === currentQuestion.correct
    const pts     = correct ? getPoints(state.timeLeft) : 0

    setState(s => ({
      ...s,
      answered:      true,
      selectedChoice: choiceIndex,
      score:         s.score + pts,
      worldScore:    s.worldScore + pts,
      totalCorrect:  s.totalCorrect + (correct ? 1 : 0),
    }))
  }

  function nextQuestion() {
    const isLastQ = state.questionIndex >= currentWorld.questions.length - 1
    if (isLastQ) {
      setState(s => ({
        ...s,
        screen:      'world-end',
        worldScores: [...s.worldScores, s.worldScore],
        answered:    false,
        selectedChoice: null,
      }))
    } else {
      setState(s => ({
        ...s,
        screen:         'question',
        questionIndex:  s.questionIndex + 1,
        answered:       false,
        selectedChoice: null,
        timeLeft:       TIMER_MAX,
      }))
      startTimer()
    }
  }

  async function nextWorld() {
    const isLastWorld = state.worldIndex >= WORLDS.length - 1
    if (isLastWorld) {
      // Sauvegarder le score
      if (state.playerId) {
        try {
          await fetch(`${API}/score`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              player_id:    state.playerId,
              total_score:  state.score,
              correct:      state.totalCorrect,
              total_q:      totalQuestions,
              world_scores: [...state.worldScores],
            }),
          })
        } catch {
          console.warn('Impossible de sauvegarder le score')
        }
      }
      setState(s => ({ ...s, screen: 'final' }))
    } else {
      setState(s => ({
        ...s,
        screen:        'world-intro',
        worldIndex:    s.worldIndex + 1,
        questionIndex: 0,
        answered:      false,
        selectedChoice: null,
      }))
    }
  }

  function restart() {
    stopTimer()
    setState({ ...INITIAL_STATE, username: state.username })
  }

  const rank = getRank(state.score, totalQuestions)

  return {
    state,
    currentWorld,
    currentQuestion,
    totalQuestions,
    rank,
    setUsername,
    startGame,
    startWorld,
    answer,
    nextQuestion,
    nextWorld,
    restart,
  }
}
