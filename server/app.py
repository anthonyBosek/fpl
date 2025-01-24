#! /usr/bin/env python3
# server/app.py
# python/flask microservice

from config import app, db, api, jwt
from flask import render_template
from werkzeug.exceptions import NotFound

# models
from models.user import User
from schemas.league_player_schema import LeaguePlayerSchema

# auth routes
from routes.auth.login import Login
from routes.auth.logout import Logout
from routes.auth.me import Me
from routes.auth.refresh import Refresh
from routes.auth.register import Register

# routes
from routes.leagues import Leagues
from routes.league_by_id import LeagueById
from routes.players import Players
from routes.player_by_id import PlayerById
from routes.teams import Teams
from routes.team_by_id import TeamById


# api auth resources
api.add_resource(Login, "/auth/login")
api.add_resource(Logout, "/auth/logout")
api.add_resource(Me, "/auth/me")
api.add_resource(Refresh, "/auth/refresh")
api.add_resource(Register, "/auth/register")

# api resources
api.add_resource(LeagueById, "/leagues/<int:id>")
api.add_resource(Leagues, "/leagues")
api.add_resource(PlayerById, "/players/<int:id>")
api.add_resource(Players, "/players")
api.add_resource(TeamById, "/teams/<int:id>")
api.add_resource(Teams, "/teams")


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return db.session.get(User, identity)


@app.errorhandler(NotFound)
def handle_404(error):
    response = {"message": error.description}
    return response, error.code


# @app.route("/")
# def index():
#     return "Fantasy Eleven API"


# frontend routes
@app.route("/")
@app.route("/auth")
@app.route("/premier-league")
@app.route("/fantasy-league")
@app.route("/users/<int:id>/dashboard")
def index(id=0):
    return render_template("index.html")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
