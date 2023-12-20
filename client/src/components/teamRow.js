import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { StyledTableCell } from "./styledComponents/tableCell";
import { StyledTableRow } from "./styledComponents/tableRow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { randomThumb } from "../utils/main";
import PlayerCardSmall from "./playerCardSm";

const TeamRow = ({ team, league }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const allPlayers = team.players.map((player) => (
    <PlayerCardSmall key={`player-card-${player.id}`} ref_id={player.ref} />
  ));

  return (
    <>
      <StyledTableRow onClick={() => handleClick()}>
        <StyledTableCell align="center">
          <CardMedia
            component="img"
            sx={{ width: 60 }}
            image={randomThumb()}
            alt={team.name}
          />
        </StyledTableCell>
        <StyledTableCell align="center">{team.name}</StyledTableCell>
        <StyledTableCell align="center">
          {league ? league.name : team.owner_name}
        </StyledTableCell>
        <StyledTableCell align="center">
          {!open ? (
            <KeyboardArrowDownIcon fontSize="large" sx={{ marginTop: "8px" }} />
          ) : (
            <KeyboardArrowUpIcon fontSize="large" sx={{ marginTop: "8px" }} />
          )}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ padding: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 1,
                height: "300px",
                background: "#f8f9fa",
                borderRadius: "10px",
              }}
            >
              <div className="roster-grid">
                <div className="roster-grid-label">Goalkeeper</div>
                <div className="roster-grid-label">Defender</div>
                <div className="roster-grid-label">Defender</div>
                <div className="roster-grid-label">Defender</div>
                <div className="roster-grid-label">Defender</div>
                <div className="roster-grid-label">Midfielder</div>
                <div className="roster-grid-label">Midfielder</div>
                <div className="roster-grid-label">Midfielder</div>
                <div className="roster-grid-label">Attacker</div>
                <div className="roster-grid-label">Attacker</div>
                <div className="roster-grid-label">Attacker</div>
                {allPlayers}
              </div>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default TeamRow;
