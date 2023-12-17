from sqlalchemy.orm import validates
from config import db
from models.league import League
from models.player import Player


class LeaguePlayer(db.Model):
    __tablename__ = "league_players"

    league_id = db.Column(db.Integer, db.ForeignKey("leagues.id"), primary_key=True)
    player_id = db.Column(db.Integer, db.ForeignKey("players.id"), primary_key=True)

    # @validates("league_id", "player_id")
    # def validate_league_player_id(self, _, league_id_, player_id_):
    #     if (
    #         db.session.query(LeaguePlayer)
    #         .filter_by(league_id=league_id_, player_id=player_id_)
    #         .first()
    #         is not None
    #     ):
    #         raise ValueError("League ID - Player ID combination must be unique")
    #     return league_id_, player_id_
