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
    username = fields.String(required=True, validate=validate.Length(min=2, max=50))
    email = fields.String(required=True, validate=validate.Length(min=2, max=256))
    teams = fields.List(
        fields.Nested(
            "TeamSchema",
            exclude=(
                "owner",
                "owner_id",
                "league_id",
                "players",
            ),
            dump_only=True,
        )
    )
    leagues = fields.List(
        fields.Nested("LeagueSchema", exclude=("manager",), dump_only=True)
    )
