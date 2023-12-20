import { useEffect, useState } from "react";
import { PL_ROSTERS } from "../assets/data/pl";

const PlayerCardSmall = ({ ref_id }) => {
  const [team, setTeam] = useState({});
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const getPlayer = () => {
      PL_ROSTERS.filter(({ team, players }) => {
        players.filter((player) => {
          if (player.id === ref_id) {
            setTeam(team);
            setPlayer(player);
          }
        });
      });
    };
    if (ref_id) {
      getPlayer();
    }
  }, [ref_id]);

  return (
    <div className={`roster-grid-cell`}>
      <img src={player.photo} alt={player.name} className="cell-play" />
      <img src={team.logo} alt={team.name} className="cell-logo" />
      <div className="cell-name">{player.name}</div>
    </div>
  );
};

export default PlayerCardSmall;
