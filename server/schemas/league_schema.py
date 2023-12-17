from marshmallow import fields, validate
from config import ma
from models.league import League


class LeagueSchema(ma.SQLAlchemySchema):
    class Meta:
        model = League
        load_instance = True
        fields = [
            "id",
            "name",
            "scored",
            "team_limit",
            "manager_id",
            "manager",
            "teams",
            "manager_name",
        ]

    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    scored = fields.String(
        required=True, validate=validate.OneOf(["Head-To-Head", "Total Points"])
    )
    team_limit = fields.Integer(required=True, validate=validate.Range(min=4, max=10))
    manager_id = fields.Integer(required=True)
    manager = fields.Nested(
        "UserSchema",
        exclude=("email", "teams", "leagues"),
        dump_only=True,
    )
    # teams = fields.List(
    #     fields.Nested(
    #         "TeamSchema",
    #         # exclude=("league", "players", "home_matchups", "away_matchups"),
    #         only=("id", "name", "owner_id", "players"),
    #         dump_only=True,
    #     )
    # )
    manager_name = fields.String(dump_only=True)
