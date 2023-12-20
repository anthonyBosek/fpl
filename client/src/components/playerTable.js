import { useEffect, useState } from "react";
import { PL_ROSTERS } from "../assets/data/pl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./styledComponents/tableCell";
import PlayerRow from "./playerRow";

const PlayerTable = ({ id }) => {
  const [team, setTeam] = useState(null);
  const [position, setPosition] = useState("all");

  useEffect(() => {
    const filteredTeam = PL_ROSTERS.filter((t) => t.team.id === id)[0];
    setTeam(filteredTeam);
  }, [id]);

  const handleChange = (e) => setPosition(e.target.value);

  const allPlayers = team?.players
    .filter((player) => position === "all" || player.position === position)
    .map((player) => (
      <PlayerRow key={player.id} player={player} team={team.team} />
    ));

  return (
    <TableContainer>
      <Table
        sx={{
          margin: "20px auto",
          border: "1px solid #ccc",
          boxShadow: "0 0 6px #381d54",
        }}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" width="11%"></StyledTableCell>
            <StyledTableCell align="center" width="26%">
              Name
            </StyledTableCell>
            <StyledTableCell align="center" width="26%">
              <select onChange={handleChange} className="pos-sel">
                <option value="all">All</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Defender">Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Attacker">Attacker</option>
              </select>
            </StyledTableCell>
            <StyledTableCell align="center" width="26%">
              Jersey #
            </StyledTableCell>
            <StyledTableCell align="center" width="11%"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{allPlayers}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerTable;
