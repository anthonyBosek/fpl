import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundImage:
      "linear-gradient(to right,#05f7fc,#07f9a0,#3dfe44,#c7ff12)",
    // backgroundColor: "#e9ecef",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    cursor: "pointer",
  },
}));
