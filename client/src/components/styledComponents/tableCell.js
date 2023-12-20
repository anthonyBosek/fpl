import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 600,
  fontFamily: "Oswald",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#381d54",
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Oswald",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
