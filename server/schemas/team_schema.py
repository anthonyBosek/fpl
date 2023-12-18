from marshmallow import fields, validate
from config import ma
from models.team import Team


class TeamSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Team
        load_instance = True
        fields = [
            "id",
            "name",
            "owner_id",
            "league_id",
            "owner",
            "league",
            "players",
            "league_name",
            "owner_name",
        ]

    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    owner_id = fields.Integer(required=True)
    league_id = fields.Integer(required=True)
    owner = fields.Nested("UserSchema", only=("username",), dump_only=True)
    league = fields.Nested(
        "LeagueSchema", only=("name", "manager.username"), dump_only=True
    )
    # players = fields.List(
    #     fields.Nested(
    #         "PlayerSchema",
    #         exclude=("owner",),
    #         only=("id", "name", "position", "data_num"),
    #         dump_only=True,
    #     )
    # )
    league_name = fields.String(dump_only=True)
    owner_name = fields.String(dump_only=True)
