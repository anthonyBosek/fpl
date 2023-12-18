from sqlalchemy.orm import validates
from config import db
from sqlalchemy.ext.associationproxy import association_proxy
from models.mixins import TimestampMixin
from models.user import User


class League(db.Model, TimestampMixin):
    __tablename__ = "leagues"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    scored = db.Column(db.String, nullable=False)
    team_limit = db.Column(db.Integer, nullable=False)
    manager_id = db.Column(
        db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )

    manager = db.relationship("User", back_populates="leagues")
    teams = db.relationship(
        "Team", back_populates="league", cascade="all, delete-orphan"
    )
    players = db.relationship(
        "Player",
        secondary="league_players",
        back_populates="league",
        cascade="all, delete-orphan",
        single_parent=True,
    )

    manager_name = association_proxy("manager", "username")

    @validates("name")
    def validate_name(self, _, name):
        if not name:
            raise AssertionError("Name is required")
        elif len(name) < 2:
            raise ValueError("Name must be at least 2 characters")
        elif len(name) > 100:
            raise ValueError("Name must be less than 100 characters")
        return name

    @validates("scored")
    def validate_scored(self, _, scored):
        if not scored:
            raise AssertionError("Scoring method is required")
        elif scored not in ["Head-To-Head", "Total Points"]:
            raise ValueError(
                "Scoring method must be either 'Head-To-Head' or 'Total Points'"
            )
        return scored

    @validates("team_limit")
    def validate_team_limit(self, _, team_limit_):
        if not team_limit_:
            raise AssertionError("Team limit is required")
        elif type(team_limit_) is not int:
            raise AssertionError("Team limit must be of type int")
        elif not 4 <= team_limit_ <= 10:
            raise ValueError("Team limit must be between 4 and 10")
        return team_limit_

    @validates("manager_id")
    def validate_manager_id(self, _, manager_id):
        if not manager_id:
            raise AssertionError("Manager ID is required")
        elif type(manager_id) is not int:
            raise AssertionError("Manager ID must be of type int")
        elif not db.session.get(User, manager_id):
            raise ValueError("Manager ID must exist")
        return manager_id

    def __repr__(self):
        return f"<League #{self.id} {self.name}>"
