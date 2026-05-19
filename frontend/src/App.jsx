// src/App.jsx
import { useGame } from "./hooks/useGame";
import { WORLDS } from "./data/worlds";
import Timer from "./components/Timer";
import Leaderboard from "./components/Leaderboard";

// ── Styles globaux ─────────────────────────────────────────────────────────────
const G = {
  wrap: {
    fontFamily: "'Raleway', sans-serif",
    background: "#0a0a14",
    color: "#e0daf5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    position: "relative",
  },
  title: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 28,
    fontWeight: 900,
    color: "#c084fc",
    textAlign: "center",
    letterSpacing: 4,
    marginBottom: 6,
    textShadow:
      "0 0 30px rgba(192,132,252,0.6), 0 0 60px rgba(192,132,252,0.3)",
    textTransform: "uppercase",
  },
  sub: {
    fontSize: 14,
    color: "#8880aa",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 28,
    letterSpacing: 1,
  },
  ornament: {
    color: "#c084fc",
    opacity: 0.5,
    fontSize: 16,
    letterSpacing: 10,
    textAlign: "center",
    margin: "10px 0",
  },
  card: {
    border: "1px solid rgba(192,132,252,0.25)",
    borderRadius: 10,
    padding: 20,
    background: "rgba(0,0,0,0.35)",
    width: "100%",
    maxWidth: 200,
  },
  btnGold: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 13,
    letterSpacing: 3,
    color: "#0a0a14",
    background: "linear-gradient(135deg, #c084fc, #818cf8)",
    border: "none",
    borderRadius: 8,
    padding: "14px 36px",
    cursor: "pointer",
    fontWeight: 700,
    transition: "all 0.2s",
    marginTop: 8,
    textTransform: "uppercase",
    boxShadow: "0 0 20px rgba(192,132,252,0.4)",
  },
  btnOutline: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    color: "#c084fc",
    background: "transparent",
    border: "1px solid rgba(192,132,252,0.4)",
    borderRadius: 8,
    padding: "10px 24px",
    cursor: "pointer",
    transition: "all 0.2s",
    marginTop: 6,
    textTransform: "uppercase",
  },
};

function ArtworkCard({ art }) {
  return (
    <div
      style={{
        border: "2px solid rgba(192,132,252,0.28)",
        borderRadius: 10,
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxHeight: 240,
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}
      >
        {art.image ? (
          <img
            src={art.image}
            alt={art.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <div style={{ fontSize: 72 }}>{art.emoji || "🖼️"}</div>
        )}
      </div>

      <div style={{ padding: "10px 16px 14px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 12,
            color: "#c084fc",
            letterSpacing: 1,
          }}
        >
          {art.title}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#6a62a0",
            fontStyle: "italic",
            marginTop: 3,
          }}
        >
          {art.artist}
        </div>
        <div
          style={{
            display: "inline-block",
            marginTop: 6,
            padding: "2px 10px",
            borderRadius: 20,
            border: "1px solid rgba(192,132,252,0.2)",
            fontSize: 10,
            color: "#5a4a90",
            letterSpacing: 1,
          }}
        >
          {art.period}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Intro ──────────────────────────────────────────────────────────────
function ScreenIntro({ startGame }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        width: "100%",
        maxWidth: 560,
      }}
    >
      {/* COSMIC BADGE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(192,132,252,0.08)",
          border: "1px solid rgba(192,132,252,0.2)",
          borderRadius: 999,
          padding: "6px 16px",
          marginBottom: 20,
        }}
      >
        <span style={{ fontSize: 14 }}>🚀</span>
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 9,
            letterSpacing: 3,
            color: "#c084fc",
            textTransform: "uppercase",
          }}
        >
          Quiz Cosmique · Saison I
        </span>
      </div>

      {/* TITLE BLOCK */}
      <div
        style={{ position: "relative", textAlign: "center", marginBottom: 8 }}
      >
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11,
            letterSpacing: 6,
            color: "#818cf8",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          ✦ L'Explorateur Critique ✦
        </div>
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 32,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 2,
            lineHeight: 1.1,
            textShadow:
              "0 0 40px rgba(192,132,252,0.7), 0 0 80px rgba(130,100,240,0.4)",
          }}
        >
          ART &amp; CULTURE
        </div>
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 32,
            fontWeight: 900,
            background: "linear-gradient(90deg, #c084fc, #818cf8, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 2,
            lineHeight: 1.1,
          }}
        >
          UNIVERSE
        </div>
      </div>

      <div
        style={{
          fontSize: 13,
          color: "#6a62a0",
          fontStyle: "italic",
          letterSpacing: 1,
          marginBottom: 28,
          textAlign: "center",
        }}
      >
        Traverse les galaxies du savoir artistique
      </div>

      {/* STATS STRIP */}
      <div
        style={{
          display: "flex",
          gap: 0,
          width: "100%",
          marginBottom: 24,
          border: "1px solid rgba(192,132,252,0.15)",
          borderRadius: 10,
          overflow: "hidden",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        {[
          { icon: "🌌", val: WORLDS.length, label: "Mondes" },
          {
            icon: "⚡",
            val: WORLDS.reduce((s, w) => s + w.questions.length, 0),
            label: "Questions",
          },
          { icon: "🏆", val: "∞", label: "Gloire" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: "14px 8px",
              textAlign: "center",
              borderRight: i < 2 ? "1px solid rgba(192,132,252,0.1)" : "none",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#c084fc",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: 10, color: "#5a527a", letterSpacing: 1 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Grille des mondes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          width: "100%",
          marginBottom: 24,
        }}
      >
        {WORLDS.map((w) => (
          <div
            key={w.id}
            style={{
              border: "1px solid rgba(192,132,252,0.15)",
              borderRadius: 10,
              padding: "10px 6px",
              textAlign: "center",
              background: "rgba(192,132,252,0.04)",
              transition: "all 0.2s",
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 5 }}>{w.icon}</div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 8,
                color: "#c084fc",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {w.roman}
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#5a527a",
                marginTop: 3,
                fontStyle: "italic",
                lineHeight: 1.3,
              }}
            >
              {w.name}
            </div>
          </div>
        ))}
      </div>

      {/* Input nom */}
      <div style={{ width: "100%", position: "relative", marginBottom: 12 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 16,
            pointerEvents: "none",
          }}
        ></span>
      </div>

      <button style={G.btnGold} onClick={startGame}>
        🚀 Lancer l'Exploration
      </button>

      <div
        style={{
          fontSize: 11,
          color: "#2a2060",
          fontStyle: "italic",
          marginTop: 12,
        }}
      >
        Timer · Classement · Badges de rang
      </div>
    </div>
  );
}

// ── Screen: World Intro ────────────────────────────────────────────────────────
function ScreenWorldIntro({ world, startWorld }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 14,
        maxWidth: 460,
      }}
    >
      <div style={{ fontSize: 70 }}>{world.icon}</div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 9,
          letterSpacing: 4,
          color: "#6a62a0",
          textTransform: "uppercase",
        }}
      >
        Monde {world.roman} sur {WORLDS.length}
      </div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 20,
          color: "#c084fc",
          letterSpacing: 2,
          textShadow: "0 0 20px rgba(192,132,252,0.5)",
        }}
      >
        {world.name}
      </div>
      <div style={G.ornament}>✦ ✦ ✦</div>
      <p
        style={{
          fontSize: 15,
          color: "#8880aa",
          fontStyle: "italic",
          lineHeight: 1.6,
        }}
      >
        {world.description}
      </p>
      <div
        style={{
          background: "rgba(192,132,252,0.06)",
          border: "1px solid rgba(192,132,252,0.15)",
          borderRadius: 8,
          padding: "10px 16px",
          fontSize: 13,
          color: "#6a5a4a",
          lineHeight: 1.5,
        }}
      >
        💡 {world.tip}
      </div>
      <button style={{ ...G.btnGold, marginTop: 16 }} onClick={startWorld}>
        Explorer ce Monde →
      </button>
    </div>
  );
}

// ── Screen: Question ──────────────────────────────────────────────────────────
function ScreenQuestion({
  world,
  question,
  questionIndex,
  state,
  answer,
  nextQuestion,
}) {
  const typeLabels = {
    classif: "⚖️ Classification",
    message: "💬 Compréhension",
    culture: "🌍 Culture & Contexte",
  };

  const isCorrect = state.answered && state.selectedChoice === question.correct;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 380,
      }}
    >
      {/* HUD */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 16px",
          border: "1px solid rgba(192,132,252,0.18)",
          borderRadius: 8,
          background: "rgba(0,0,0,0.4)",
          marginBottom: 18,
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 9,
            color: "#c084fc",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {world.icon} {world.name}
        </span>
        <Timer timeLeft={state.timeLeft} />
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11,
            color: "#e0daf5",
          }}
        >
          <b style={{ color: "#c084fc", fontSize: 15 }}>{state.score}</b> pts
        </span>
      </div>

      {/* Dots progression */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {world.questions.map((_, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                i < questionIndex
                  ? "#c084fc"
                  : i === questionIndex
                    ? "rgba(192,132,252,0.4)"
                    : "rgba(255,255,255,0.1)",
              border: `1px solid ${i <= questionIndex ? "#c084fc" : "rgba(192,132,252,0.2)"}`,
            }}
          />
        ))}
      </div>

      {/* Artwork */}
      <ArtworkCard art={question.art} />

      {/* Type label */}
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 9,
          letterSpacing: 2,
          color: "#6a62a0",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {typeLabels[question.type]}
      </div>

      {/* Question */}
      <div
        style={{
          fontSize: 17,
          color: "#e0daf5",
          textAlign: "center",
          marginBottom: 18,
          lineHeight: 1.5,
          fontWeight: 600,
        }}
      >
        {question.question}
      </div>

      {/* Choices — always 2×2 grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          width: "100%",
        }}
      >
        {question.choices.map((c, i) => {
          let bg = "rgba(255,255,255,0.04)";
          let border = "1px solid rgba(192,132,252,0.2)";
          let color = "#e0daf5";
          if (state.answered) {
            if (i === question.correct) {
              bg = "rgba(40,160,80,0.2)";
              border = "1px solid #28a050";
              color = "#7de8a0";
            } else if (i === state.selectedChoice) {
              bg = "rgba(180,40,40,0.2)";
              border = "1px solid #b42828";
              color = "#e87d7d";
            }
          }
          return (
            <button
              key={i}
              disabled={state.answered}
              onClick={() => answer(i)}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color,
                background: bg,
                border,
                borderRadius: 8,
                padding: "13px 12px",
                cursor: state.answered ? "default" : "pointer",
                transition: "all 0.2s",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {state.answered && (
        <div
          style={{
            marginTop: 16,
            padding: "14px 18px",
            borderRadius: 8,
            fontSize: 13,
            lineHeight: 1.6,
            width: "100%",
            textAlign: "center",
            background: isCorrect
              ? "rgba(40,160,80,0.15)"
              : "rgba(180,40,40,0.15)",
            border: `1px solid ${isCorrect ? "rgba(40,160,80,0.3)" : "rgba(180,40,40,0.3)"}`,
            color: isCorrect
              ? "#7de8a0"
              : state.selectedChoice === -1
                ? "#e8a030"
                : "#e87d7d",
            boxSizing: "border-box",
          }}
        >
          {state.selectedChoice === -1
            ? "⏱️ Temps écoulé ! "
            : isCorrect
              ? "✅ Correct ! · "
              : "❌ "}
          {question.explanation}
        </div>
      )}

      {state.answered && (
        <button style={{ ...G.btnGold, marginTop: 16 }} onClick={nextQuestion}>
          Continuer →
        </button>
      )}
    </div>
  );
}

// ── Screen: World End ──────────────────────────────────────────────────────────
function ScreenWorldEnd({ world, worldScore, worldIndex, nextWorld }) {
  const maxScore = world.questions.length * 150;
  const pct = worldScore / maxScore;
  const icon = pct >= 0.8 ? "🏆" : pct >= 0.5 ? "⭐" : "📚";
  const msg =
    pct >= 0.8
      ? "Excellent ! Vous maîtrisez parfaitement ce chapitre."
      : pct >= 0.5
        ? "Bien joué ! Votre sens critique se développe."
        : "Continuez à explorer — chaque monde est une leçon.";
  const isLast = worldIndex >= WORLDS.length - 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 12,
        maxWidth: 320,
      }}
    >
      <div style={{ fontSize: 64 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 18,
          color: "#c084fc",
          letterSpacing: 2,
        }}
      >
        {world.name}
      </div>
      <div style={G.ornament}>✦ ✦ ✦</div>
      <p
        style={{
          fontSize: 15,
          color: "#8880aa",
          fontStyle: "italic",
          lineHeight: 1.6,
        }}
      >
        {msg}
      </p>
      <div style={{ fontSize: 24, color: "#e0daf5", margin: "8px 0" }}>
        Score du monde :{" "}
        <span style={{ color: "#c084fc", fontSize: 36, fontWeight: 700 }}>
          {worldScore}
        </span>
      </div>
      <button style={G.btnGold} onClick={nextWorld}>
        {isLast ? "🎉 Voir mon résultat final" : "Monde suivant →"}
      </button>
    </div>
  );
}

// ── Screen: Final ──────────────────────────────────────────────────────────────
function ScreenFinal({ state, rank, totalQuestions, restart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        width: "100%",
        maxWidth: 320,
      }}
    >
      <div style={{ fontSize: 70 }}>{rank.badge}</div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 20,
          color: "#c084fc",
          letterSpacing: 2,
          textAlign: "center",
          textShadow: "0 0 20px rgba(192,132,252,0.5)",
        }}
      >
        Voyage Accompli !
      </div>
      <div style={G.ornament}>✦ ✦ ✦</div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 14,
          color: "#a48df5",
          textAlign: "center",
        }}
      >
        {rank.label}
      </div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 48,
          color: "#c084fc",
          fontWeight: 900,
        }}
      >
        {state.score}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#6a62a0",
          fontStyle: "italic",
          marginBottom: 8,
        }}
      >
        points totaux
      </div>

      {/* Stats par monde */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          width: "100%",
          marginBottom: 16,
        }}
      >
        {state.worldScores.map((s, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(192,132,252,0.2)",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>
              {WORLDS[i]?.icon}
            </div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 18,
                color: "#c084fc",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#6a62a0",
                fontStyle: "italic",
                marginTop: 2,
              }}
            >
              {WORLDS[i]?.name}
            </div>
          </div>
        ))}
        <div
          style={{
            border: "1px solid rgba(192,132,252,0.2)",
            borderRadius: 8,
            padding: 12,
            textAlign: "center",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 20,
              color: "#c084fc",
              fontWeight: 600,
            }}
          >
            {state.totalCorrect}/{totalQuestions}
          </div>
          <div
            style={{
              fontSize: 9,
              color: "#6a62a0",
              fontStyle: "italic",
              marginTop: 2,
            }}
          >
            bonnes réponses
          </div>
        </div>
      </div>

      <Leaderboard />

      <button style={{ ...G.btnGold, marginTop: 8 }} onClick={restart}>
        ↺ Rejouer
      </button>
    </div>
  );
}

// ── App Principal ──────────────────────────────────────────────────────────────
export default function App() {
  const game = useGame();
  const { state, currentWorld, currentQuestion, totalQuestions, rank } = game;

  const bgColors = {
    antique: "radial-gradient(ellipse at 30% 40%, #12082e 0%, #080514 100%)",
    classique: "radial-gradient(ellipse at 70% 30%, #0d0d2e 0%, #05050f 100%)",
    contemporain:
      "radial-gradient(ellipse at 50% 60%, #150d2e 0%, #080514 100%)",
    maroc: "radial-gradient(ellipse at 40% 50%, #100a28 0%, #08060f 100%)",
    patrimoine: "radial-gradient(ellipse at 60% 30%, #08102e 0%, #040510 100%)",
    digital: "radial-gradient(ellipse at 50% 70%, #180530 0%, #0a0215 100%)",
  };
  const bg = currentWorld ? bgColors[currentWorld.id] || "#0a0a14" : "#0a0a14";

  return (
    <div
      style={{ ...G.wrap, background: bg, transition: "background 1s ease" }}
    >
      {/* Starfield */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />
      {/* Nebula glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(192,132,252,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.05) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {state.screen === "intro" && (
          <ScreenIntro
            username={state.username}
            setUsername={game.setUsername}
            startGame={game.startGame}
          />
        )}
        {state.screen === "world-intro" && currentWorld && (
          <ScreenWorldIntro
            world={currentWorld}
            worldIndex={state.worldIndex}
            startWorld={game.startWorld}
          />
        )}
        {state.screen === "question" && currentWorld && currentQuestion && (
          <ScreenQuestion
            world={currentWorld}
            question={currentQuestion}
            questionIndex={state.questionIndex}
            state={state}
            answer={game.answer}
            nextQuestion={game.nextQuestion}
          />
        )}
        {state.screen === "world-end" && currentWorld && (
          <ScreenWorldEnd
            world={currentWorld}
            worldScore={state.worldScore}
            worldIndex={state.worldIndex}
            nextWorld={game.nextWorld}
          />
        )}
        {state.screen === "final" && (
          <ScreenFinal
            state={state}
            rank={rank}
            totalQuestions={totalQuestions}
            restart={game.restart}
          />
        )}
      </div>
    </div>
  );
}
