import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { StyledTableCell } from "./styledComponents/tableCell";
import { StyledTableRow } from "./styledComponents/tableRow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StatBar from "./dataVisuals/barGraph";

const PlayerRow = ({ player, team }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => setOpen(!open);

  return (
    <>
      <StyledTableRow onClick={() => handleClick(player.id)}>
        <StyledTableCell align="center">
          <CardMedia
            component="img"
            sx={{ width: 60 }}
            image={player.photo}
            alt={player.name}
          />
        </StyledTableCell>
        <StyledTableCell align="center">{player.name}</StyledTableCell>
        <StyledTableCell align="center">{player.position}</StyledTableCell>
        <StyledTableCell align="center">{player.number || "-"}</StyledTableCell>
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
              <StatBar player={player} />
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default PlayerRow;
