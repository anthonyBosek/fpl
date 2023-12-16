import { useState, useEffect } from "react";
import { PL_CLUBS } from "../assets/data/pl";
import "../styles/pl.css";

const PremierLeague = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    setClubs(PL_CLUBS);
  }, []);

  const allClubs = clubs.map((club) => {});

  return (
    <div className="premier-league">
      <h1>Clubs</h1>
    </div>
  );
};

export default PremierLeague;
