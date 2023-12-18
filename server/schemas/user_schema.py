from marshmallow import fields, validate
from config import ma
from models.user import User


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        load_instance = True
        fields = [
            "id",
            "first_name",
            "last_name",
            "location",
            "favorite_team",
            "username",
            "email",
            "teams",
            "leagues",
        ]

    first_name = fields.String(required=True, validate=validate.Length(min=2, max=50))
    last_name = fields.String(required=True, validate=validate.Length(min=2, max=50))
    location = fields.String(required=True, validate=validate.Length(min=2, max=80))
    favorite_team = fields.String(required=True, validate=validate.Length(min=3, max=3))
    username = fields.String(required=True, validate=validate.Length(min=2, max=50))
    email = fields.String(required=True, validate=validate.Length(min=2, max=256))
    teams = fields.List(
        fields.Nested(
            "TeamSchema",
            only=("id", "name", "league.name", "league.manager_name"),
            dump_only=True,
        )
    )
    leagues = fields.List(
        fields.Nested(
            "LeagueSchema", only=("id", "name", "scored", "team_limit"), dump_only=True
        )
    )
