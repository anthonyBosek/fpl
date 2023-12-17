import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import BarChartIcon from "@mui/icons-material/BarChart";
import { StyledTableCell } from "./styledComponents/tableCell";
import { StyledTableRow } from "./styledComponents/tableRow";
import { ColorButtonOutlined } from "./styledComponents/colorBtnOutline";
import StatBar from "./dataVisuals/barGraph";

const PlayerRow = ({ player, team }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    setOpen(!open);
  };

  return (
    <>
      <StyledTableRow>
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
          <ColorButtonOutlined
            size="small"
            variant="outlined"
            sx={{ margin: "6px" }}
            startIcon={<BarChartIcon />}
            onClick={() => handleClick(player.id)}
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
              <StatBar player={player} />
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default PlayerRow;
