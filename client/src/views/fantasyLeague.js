import { useState, useEffect } from "react";
// import { randomThumb } from "../utils/main";
import { FL } from "../assets/data/pl";
import Grid from "@mui/material/Grid";
import LeagueCard from "../components/leagueCard";
import LeagueView from "../components/leagueView";
import "../styles/fantasy.css";

const FantasyLeague = () => {
  const [leagues, setLeagues] = useState([]);
  const [lID, setLID] = useState(null);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    setLeagues(FL);
  }, []);

  useEffect(() => {
    const filteredLeague = leagues.filter((l) => l.id === lID)[0];
    setLeague(filteredLeague);
  }, [lID]);

  const handleLeagueView = (id) => setLID(id);

  const allLeagues = leagues.map((league) => (
    <LeagueCard
      key={league.id}
      league={league}
      handleLeagueView={handleLeagueView}
    />
  ));

  return (
    <div className="fantasy-league">
      {console.log(leagues)}
      {!league ? (
        <>
          <div className="league-title">Fantasy Leagues</div>
          <div className="league-cards">
            <Grid container spacing={5}>
              {allLeagues}
            </Grid>
          </div>
        </>
      ) : (
        <>
          <LeagueView league={league} handleLeagueView={handleLeagueView} />
        </>
      )}
    </div>
  );
};

export default FantasyLeague;
