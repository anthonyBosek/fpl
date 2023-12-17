from sqlalchemy.orm import validates
from config import db
from sqlalchemy.ext.associationproxy import association_proxy
from models.mixins import TimestampMixin
from models.team import Team


class Player(db.Model, TimestampMixin):
    __tablename__ = "players"

    id = db.Column(db.Integer, primary_key=True)
    ref = db.Column(db.Integer, nullable=False)
    spot = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    position = db.Column(db.String, nullable=False)
    team_id = db.Column(
        db.Integer, db.ForeignKey("teams.id", ondelete="CASCADE"), nullable=False
    )

    team = db.relationship(
        "Team",
        secondary="team_players",
        back_populates="players",
        cascade="all, delete-orphan",
    )

    owner = association_proxy("team", "owner")
    league = association_proxy("team", "league")

    @validates("ref")
    def validate_ref(self, _, ref):
        if not ref:
            raise AssertionError("Ref # is required")
        elif type(ref) is not int:
            raise AssertionError("Ref # must be of type int")
        return ref

    @validates("spot")
    def validate_spot(self, _, spot):
        s = ["GK", "D1", "D2", "D3", "D4", "M1", "M2", "M3", "A1", "A2", "A3"]
        if not spot:
            raise AssertionError("Spot is required")
        elif spot not in s:
            raise ValueError(
                "Spot must be one of the following: 'GK', 'D#', 'M#', 'A#'"
            )
        return spot

    @validates("name")
    def validate_name(self, _, name):
        if not name:
            raise AssertionError("Name is required")
        elif len(name) < 2:
            raise ValueError("Name must be at least 2 characters")
        elif len(name) > 100:
            raise ValueError("Name must be less than 100 characters")
        return name

    @validates("position")
    def validate_position(self, _, position):
        if not position:
            raise AssertionError("Position is required")
        elif not type(position) is str:
            raise AssertionError("Position must be of type str")
        elif 8 <= len(position) <= 10:
            raise ValueError("Position must be between 8 and 10 characters")
        elif position not in ["Goalkeeper", "Defender", "Midfielder", "Attacker"]:
            raise ValueError(
                "Position must be one of the following: Goalkeeper, Defender, Midfielder, Attacker"
            )
        return position

    @validates("team_id")
    def validate_team_id(self, _, team_id):
        if not team_id:
            raise AssertionError("Team ID is required")
        elif type(team_id) is not int:
            raise AssertionError("Team ID must be of type int")
        elif not db.session.get(Team, team_id):
            raise ValueError("Team ID must exist")
        return team_id

    def __repr__(self):
        return f"<Player #{self.id} {self.name}>"
