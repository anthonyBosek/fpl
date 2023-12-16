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

  useEffect(() => {
    const filteredTeam = PL_ROSTERS.filter((t) => t.team.id === id)[0];
    setTeam(filteredTeam);
  }, []);

  const allPlayers = team?.players.map((player) => (
    <PlayerRow key={player.id} player={player} team={team.team} />
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ margin: "20px auto" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" width="10px"></StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">Jersey #</StyledTableCell>
            <StyledTableCell align="center">Stats</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{allPlayers}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerTable;
