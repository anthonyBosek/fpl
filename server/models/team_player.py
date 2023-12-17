from sqlalchemy.orm import validates
from config import db
from models.team import Team
from models.player import Player


class team_players(db.Model):
    __tablename__ = "team_players"

    team_id = db.Column(db.Integer, db.ForeignKey("teams.id"), primary_key=True)
    player_id = db.Column(db.Integer, db.ForeignKey("players.id"), primary_key=True)

    # validate that team_id - player_id  combination is unique
    @validates("team_id", "player_id")
    def validate_team_player_id(self, _, team_id, player_id):
        if (
            db.session.query(team_players)
            .filter_by(team_id=team_id, player_id=player_id)
            .first()
            is not None
        ):
            raise ValueError("Team ID - Player ID combination must be unique")
        return team_id, player_id

    # validate that team_id exists
    @validates("team_id")
    def validate_team_id(self, _, team_id):
        if not team_id:
            raise AssertionError("Team ID is required")
        elif type(team_id) is not int:
            raise AssertionError("Team ID must be of type int")
        elif not db.session.get(Team, team_id):
            raise ValueError("Team ID must exist")
        return team_id

    # validate that player_id exists
    @validates("player_id")
    def validate_player_id(self, _, player_id):
        if not player_id:
            raise AssertionError("Player ID is required")
        elif type(player_id) is not int:
            raise AssertionError("Player ID must be of type int")
        elif not db.session.get(Player, player_id):
            raise ValueError("Player ID must exist")
        return player_id
