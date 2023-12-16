import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButtonSolid = styled(Button)(() => ({
  fontFamily: "Oswald",
  backgroundColor: "#381d54",
  color: "#f8f9fa",
  border: "1px solid #333",
  "&:hover": {
    backgroundColor: "#381d54",
    border: "1px solid #333",
    transform: "scale(1.1)",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
}));
