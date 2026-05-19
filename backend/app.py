from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///game.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ─── MODELS ───────────────────────────────────────────────

class Player(db.Model):
    id       = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    created  = db.Column(db.DateTime, default=datetime.utcnow)
    scores   = db.relationship('Score', backref='player', lazy=True)

class Score(db.Model):
    id           = db.Column(db.Integer, primary_key=True)
    player_id    = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)
    total_score  = db.Column(db.Integer, nullable=False)
    correct      = db.Column(db.Integer, nullable=False)
    total_q      = db.Column(db.Integer, nullable=False)
    world_scores = db.Column(db.String(100))  # ex: "150,200,100,250"
    rank         = db.Column(db.String(50))
    created      = db.Column(db.DateTime, default=datetime.utcnow)

# ─── ROUTES ───────────────────────────────────────────────

@app.route('/api/player', methods=['POST'])
def create_player():
    data     = request.json
    username = data.get('username', '').strip()
    if not username:
        return jsonify({'error': 'Nom requis'}), 400
    existing = Player.query.filter_by(username=username).first()
    if existing:
        return jsonify({'id': existing.id, 'username': existing.username}), 200
    player = Player(username=username)
    db.session.add(player)
    db.session.commit()
    return jsonify({'id': player.id, 'username': player.username}), 201

@app.route('/api/score', methods=['POST'])
def save_score():
    data = request.json
    player = Player.query.get(data.get('player_id'))
    if not player:
        return jsonify({'error': 'Joueur introuvable'}), 404

    rank = get_rank(data['total_score'], data['total_q'])
    score = Score(
        player_id    = player.id,
        total_score  = data['total_score'],
        correct      = data['correct'],
        total_q      = data['total_q'],
        world_scores = ','.join(str(s) for s in data.get('world_scores', [])),
        rank         = rank
    )
    db.session.add(score)
    db.session.commit()
    return jsonify({'id': score.id, 'rank': rank}), 201

@app.route('/api/leaderboard')
def leaderboard():
    results = (
        db.session.query(Player.username, db.func.max(Score.total_score).label('best'), Score.rank)
        .join(Score)
        .group_by(Player.id)
        .order_by(db.desc('best'))
        .limit(10)
        .all()
    )
    return jsonify([
        {'username': r.username, 'best_score': r.best, 'rank': r.rank}
        for r in results
    ])

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})

# ─── HELPERS ──────────────────────────────────────────────

def get_rank(score, total_q):
    max_score = total_q * 150
    pct = score / max_score if max_score else 0
    if pct >= 0.85: return 'Grand Maître de l\'Art'
    if pct >= 0.70: return 'Critique Confirmé'
    if pct >= 0.50: return 'Explorateur Averti'
    if pct >= 0.30: return 'Voyageur Curieux'
    return 'Apprenti Explorateur'

# ─── INIT ─────────────────────────────────────────────────

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
