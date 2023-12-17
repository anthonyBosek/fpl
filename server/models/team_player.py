from sqlalchemy.orm import validates
from config import db
from models.team import Team
from models.player import Player


class Team_player(db.Model):
    __tablename__ = "team_players"

    team_id = db.Column(db.Integer, db.ForeignKey("teams.id"), primary_key=True)
    player_id = db.Column(db.Integer, db.ForeignKey("players.id"), primary_key=True)

    @validates("team_id")
    def validate_team_id(self, _, team_id):
        if not team_id:
            raise AssertionError("Team ID is required")
        elif type(team_id) is not int:
            raise AssertionError("Team ID must be of type int")
        elif not db.session.get(Team, team_id):
            raise ValueError("Team ID must exist")
        return team_id

    @validates("player_id")
    def validate_player_id(self, _, player_id):
        if not player_id:
            raise AssertionError("Player ID is required")
        elif type(player_id) is not int:
            raise AssertionError("Player ID must be of type int")
        elif not db.session.get(Player, player_id):
            raise ValueError("Player ID must exist")
        return player_id

    @validates("team_id", "player_id")
    def validate_team_player_id(self, _, team_id_, player_id_):
        if (
            db.session.query(Team_player)
            .filter_by(team_id=team_id_, player_id=player_id_)
            .first()
            is not None
        ):
            raise ValueError("Team ID - Player ID combination must be unique")
        return team_id_, player_id_
