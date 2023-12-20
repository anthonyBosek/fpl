import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import { randomThumb } from "../utils/main";
import LeagueCard from "../components/leagueCard";
import LeagueView from "../components/leagueView";
import TeamTable from "../components/teamTable";
import "../styles/fantasy.css";

const FantasyLeague = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const [leagues, setLeagues] = useState([]);
  const [lID, setLID] = useState(null);
  const [league, setLeague] = useState(null);

  useEffect(() => {
    const getLeagues = async () => {
      try {
        const res = await axios.get("/leagues");
        res.data.forEach((league) => (league.img = randomThumb("league")));
        setLeagues(res.data);
      } catch (error) {
        toast.error("Error getting leagues");
      }
    };
    getLeagues();
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
          <LeagueView
            league_id={league.id}
            handleLeagueView={handleLeagueView}
          />
          <TeamTable id={league.id} />
        </>
      )}
    </div>
  );
};

export default FantasyLeague;
