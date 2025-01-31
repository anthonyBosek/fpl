#!/usr/bin/env python3
# Seeding script for database
# Use this script to seed your database with initial data. This data may be out of date.

from random import randint, choice as rc

# faker import
from faker import Faker

from server.rosters import ROSTERS

from config import app, db
from models.league_player import LeaguePlayer
from models.league import League
from models.player import Player
from models.team import Team
from models.user import User

if __name__ == "__main__":
    fake = Faker()

    with app.app_context():
        print("Starting seed...")

        print("Clearing tables...")
        LeaguePlayer.query.delete()
        League.query.delete()
        Player.query.delete()
        Team.query.delete()
        User.query.delete()

        print("Seeding users...")
        fake_users = [
            "Alberto Sierra",
            "Anthony Bosek",
            "Austin Ohlfs",
            "Brian Richie",
            "Connor Adams",
            "Danner Baumgartner",
            "Isaac Song",
            "Isaac Wilhite",
            "Jazlin Yu",
            "Joseph Lee",
            "Kat Tannehill",
            "Landon Cramer",
            "Matteo Piccini",
            "Michael Phan",
            "Reilly Wentz",
            "Tiana Lopez",
            "Wesley Smith",
            "Zach Talmadge",
        ]
        codes = [
            "MUN",
            "NEW",
            "BOU",
            "FUL",
            "WOL",
            "LIV",
            "ARS",
            "BUR",
            "EVE",
            "TOT",
            "WES",
            "CHE",
            "MAC",
            "BRI",
            "CRY",
            "BRE",
            "SHE",
            "NOT",
            "AST",
            "LUT",
        ]
        users = []
        for fk in fake_users:
            first, last = fk.split(" ")
            user = User(
                first_name=first,
                last_name=last,
                location=fake.city() + ", " + fake.state_abbr(),
                favorite_team=rc(codes),
                username=first + str(randint(1, 100)),
                email=fake.email(),
            )
            user.password_hash = "passpasspass"
            db.session.add(user)
            users.append(user)
        db.session.commit()

        print("Seeding leagues...")
        fake_league_names = [
            "Tottenham Titans Tournament",
            "Manchester City Invitational",
            "Leicester Lionhearted Cup",
            "Wolverhampton Wolf Wizards",
            "Everton Enforcers Premier",
            "Arsenal Avengers League",
            "Manchester Mayhem Premier",
            "Liverpool Legends Cup",
            "Chelsea Champions Showcase",
            "West Ham Hammerhead Heroes",
            "Pirate Punch Premier",
            "Rambunctious Rhino Rovers",
            "Snarling Sasquatch Strikers",
            "Buffalo Blitzkrieg Bash",
            "Ninja Narwhal Navigators",
            "Mullet Mayhem Premier",
            "Rebel Rooster Renegades",
            "Voracious Viking Victory",
            "Kangaroo Kickflip Kings",
            "Sizzling Sasquatch Soccer",
        ]
        leagues = []
        for str in fake_league_names:
            league = League(
                name=str,
                scored=rc(["Head-To-Head", "Total Points"]),
                team_limit=randint(4, 10),
                manager_id=rc(users).id,
            )
            db.session.add(league)
            leagues.append(league)
        db.session.commit()

        print("Seeding teams...")
        owner_team_names = [
            "Fizz and Folly Footballers",
            "Cucumber Sandwich Centurions",
            "Manchester Mirth Makers",
            "Liverpool Lollygaggers",
            "Tea and Tackles Titans",
            "Biscuit Bandits FC",
            "Witty Whistleblowers United",
            "Jolly Jester Jaguars",
            "Limey Laughter Legends",
            "Proper Pint Prowess",
            "Clever Chortle Champions",
            "Pint-sized Prowess Pirates",
            "Scone Seekers United",
            "Whiskey Wizards XI",
            "Chuckle Brothers City",
            "Bangers and Mash Mavericks",
            "Tweed Tornado Tacklers",
            "Banter Brigade FC",
            "Cuppa and Crumpet Crew",
            "Leek and Lobster Legends",
            "Prawn Sandwich Pirates",
            "Quirky Quavers XI",
            "Wit and Wisdom Wanderers",
            "Brolly Brigade Ballers",
            "Wry Wit Wolves",
            "Plucky Pigeon Punters",
            "Roaring Riotous Rhinos",
            "Cheeky Chip Butties FC",
            "London Limerick Lions",
            "Cheese and Cracker City",
        ]
        teams = []
        for league in leagues:
            league_teams = []
            x = 0
            while x < league.team_limit:
                team_name = rc(owner_team_names)
                if team_name in league_teams:
                    continue
                else:
                    team = Team(
                        name=team_name,
                        owner_id=rc(users).id,
                        league_id=league.id,
                    )
                    x += 1
                db.session.add(team)
                teams.append(team)
                league_teams.append(team_name)
        db.session.commit()

        print("Seeding players...")

        def find_random_player_by_position(position, rosters):
            matching_players = []
            for team in rosters:
                matching_players.extend(
                    [
                        player
                        for player in team["players"]
                        if player["position"] == position
                    ]
                )
            if matching_players:
                return rc(matching_players)
            else:
                return None

        #
        for league in leagues:
            players = []
            for team in league.teams:
                gk = find_random_player_by_position("Goalkeeper", ROSTERS)
                if gk in players:
                    gk = find_random_player_by_position("Goalkeeper", ROSTERS)
                if gk:
                    player = Player(
                        ref=gk["id"],
                        spot="GK",
                        name=gk["name"],
                        position="Goalkeeper",
                        team_id=team.id,
                    )
                    db.session.add(player)
                    players.append(player)
                for i in range(4):
                    fb = find_random_player_by_position("Defender", ROSTERS)
                    if fb in players:
                        fb = find_random_player_by_position("Defender", ROSTERS)
                    if fb:
                        player = Player(
                            ref=fb["id"],
                            spot="D" + f"{i + 1}",
                            name=fb["name"],
                            position="Defender",
                            team_id=team.id,
                        )
                        db.session.add(player)
                        players.append(player)
                for i in range(3):
                    mf = find_random_player_by_position("Midfielder", ROSTERS)
                    if mf["id"] in players:
                        mf = find_random_player_by_position("Midfielder", ROSTERS)
                    if mf:
                        player = Player(
                            ref=mf["id"],
                            name=mf["name"],
                            spot="M" + f"{i + 1}",
                            position="Midfielder",
                            team_id=team.id,
                        )
                        db.session.add(player)
                        players.append(player)
                for i in range(3):
                    at = find_random_player_by_position("Attacker", ROSTERS)
                    if at["id"] in players:
                        at = find_random_player_by_position("Attacker", ROSTERS)
                    if at:
                        player = Player(
                            ref=at["id"],
                            spot="A" + f"{i + 1}",
                            name=at["name"],
                            position="Attacker",
                            team_id=team.id,
                        )
                        db.session.add(player)
                        players.append(player)
            db.session.commit()
            for player in players:
                # print(player)
                league_player = LeaguePlayer(
                    player_id=player.id,
                    league_id=league.id,
                )
                db.session.add(league_player)
            db.session.commit()

        print("Seed complete!")
        print("Let's get ready to rumble!")
