import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "./styledComponents/tableCell";
import TeamRow from "./teamRow";

const TeamTable = ({ id }) => {
  const [league, setLeague] = useState(null);
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const getLeague = async () => {
      try {
        const res = await axios.get(`/leagues/${id}`);
        setLeague(res.data);
        setTeams(res.data.teams);
      } catch (error) {
        toast.error("Error getting league");
      }
    };
    getLeague();
  }, []);

  const allTeams = teams?.map((team) => (
    <TeamRow key={`team-row-${team.id}`} team={team} />
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
              Team Name
            </StyledTableCell>
            <StyledTableCell align="center" width="26%">
              Owner Name
            </StyledTableCell>
            <StyledTableCell align="center" width="11%"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{allTeams}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamTable;
