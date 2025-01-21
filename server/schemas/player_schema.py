# Schema for Player model
from marshmallow import fields, validate
from config import ma
from models.player import Player


class PlayerSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Player
        load_instance = True
        fields = [
            "id",
            "ref",
            "spot",
            "name",
            "position",
            "team_id",
            "team",
            "owner",
            "league",
        ]

    ref = fields.Integer(required=True)
    spot = fields.String(
        required=True,
        validate=validate.OneOf(
            ["GK", "D1", "D2", "D3", "D4", "M1", "M2", "M3", "A1", "A2", "A3"]
        ),
    )
    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    position = fields.String(
        required=True,
        validate=validate.OneOf(["Goalkeeper", "Defender", "Midfielder", "Attacker"]),
    )
    team_id = fields.Integer(required=True)
    team = fields.Nested("TeamSchema", only=("name",), dump_only=True)
    owner = fields.Nested("UserSchema", only=("id", "username"), dump_only=True)
    league = fields.Nested("LeagueSchema", only=("name",), dump_only=True)
