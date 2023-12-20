import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButtonSolid = styled(Button)(() => ({
  fontFamily: "Oswald",
  backgroundColor: "#430B49",
  color: "#f8f9fa",
  border: "1px solid #333",
  padding: 0,
  "&:hover": {
    backgroundColor: "#430B49",
    // border: "1px solid #333",
    // transform: "scale(1.1)",
    boxShadow: "0 0 5px #ccc, 0 0 10px #ccc, 0 0 15px #ccc",
  },
}));
