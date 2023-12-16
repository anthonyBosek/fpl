import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ColorButtonOutlined = styled(Button)(() => ({
  fontFamily: "Oswald",
  color: "#381d54",
  border: "1px solid #381d54",
  "&:hover": {
    backgroundColor: "#f8f9fa",
    border: "1px solid #381d54",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
}));
