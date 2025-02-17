# TimestampMixin: A mixin class for adding created_at and updated_at fields to a model

from config import db


class TimestampMixin:
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
