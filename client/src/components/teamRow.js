import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import BarChartIcon from "@mui/icons-material/BarChart";
import { StyledTableCell } from "./styledComponents/tableCell";
import { StyledTableRow } from "./styledComponents/tableRow";
import { ColorButtonOutlined } from "./styledComponents/colorBtnOutline";
import StatBar from "./dataVisuals/barGraph";
import { randomThumb } from "../utils/main";
import PlayerCardSmall from "./playerCardSm";

const TeamRow = ({ team }) => {
  const [open, setOpen] = useState(false);
  // const [players, setPlayers] = useState(team.players);

  const handleClick = () => setOpen(!open);

  const allPlayers = team.players.map((player) => (
    <PlayerCardSmall key={`player-card-${player.id}`} ref_id={player.ref} />
  ));

  return (
    <>
      {/* {console.log(team)} */}
      <StyledTableRow>
        <StyledTableCell align="center">
          <CardMedia
            component="img"
            sx={{ width: 60 }}
            image={randomThumb()}
            alt={team.name}
          />
        </StyledTableCell>
        <StyledTableCell align="center">{team.name}</StyledTableCell>
        <StyledTableCell align="center">{team.owner_name}</StyledTableCell>
        <StyledTableCell align="right">
          <ColorButtonOutlined
            size="small"
            variant="outlined"
            sx={{ margin: "6px 30px" }}
            startIcon={<BarChartIcon />}
            onClick={() => handleClick()}
          >
            Info
          </ColorButtonOutlined>
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
