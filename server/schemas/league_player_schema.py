# Schema for LeaguePlayer model
from marshmallow import fields, validate
from config import ma
from models.league_player import LeaguePlayer


class LeaguePlayerSchema(ma.SQLAlchemySchema):
    class Meta:
        model = LeaguePlayer
        load_instance = True
        fields = [
            "id",
            "player_id",
            "league_id",
            "player",
        ]

    player_id = fields.Integer(required=True)
    league_id = fields.Integer(required=True)
    player = fields.Nested(
        "PlayerSchema",
        only=("id", "ref", "spot", "name", "position"),
        dump_only=True,
    )
