import { useState, useEffect } from "react";
import { PL_CLUBS } from "../assets/data/pl";
import Grid from "@mui/material/Grid";
import ClubCard from "../components/clubCard";
import ClubView from "../components/clubView";
import PlayerTable from "../components/playerTable";
import "../styles/pl.css";

const PremierLeague = () => {
  const [clubs, setClubs] = useState([]);
  const [cID, setCID] = useState(null);
  const [club, setClub] = useState(null);

  useEffect(() => {
    setClubs(PL_CLUBS);
  }, []);

  useEffect(() => {
    const filteredClub = PL_CLUBS.filter((c) => c.team.id === cID)[0];
    setClub(filteredClub);
  }, [cID]);

  const handleClubView = (id) => setCID(id);

  const allClubs = clubs.map(({ team, venue }) => (
    <ClubCard
      key={team.id}
      team={team}
      venue={venue}
      handleClubView={handleClubView}
    />
  ));

  return (
    <div className="premier-league">
      {!club ? (
        <>
          <div className="club-title">Clubs</div>
          <div className="club-cards">
            <Grid container spacing={5}>
              {allClubs}
            </Grid>
          </div>
        </>
      ) : (
        <>
          <ClubView
            team={club.team}
            venue={club.venue}
            handleClubView={handleClubView}
          />
          <PlayerTable id={club.team.id} />
        </>
      )}
    </div>
  );
};

export default PremierLeague;
