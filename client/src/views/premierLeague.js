import { useState, useEffect } from "react";
import { PL_CLUBS } from "../assets/data/pl";
import Grid from "@mui/material/Grid";
import ClubCard from "../components/clubCard";
import "../styles/pl.css";

const PremierLeague = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    setClubs(PL_CLUBS);
  }, []);

  const allClubs = clubs.map(({ team, venue }) => (
    <ClubCard key={team.id} team={team} venue={venue} />
  ));

  return (
    <div className="premier-league">
      <div className="club-title">Clubs</div>
      <div className="club-cards">
        <Grid container spacing={5}>
          {allClubs}
        </Grid>
      </div>
    </div>
  );
};

export default PremierLeague;
