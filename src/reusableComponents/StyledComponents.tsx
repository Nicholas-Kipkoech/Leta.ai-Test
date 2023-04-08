import styled from "@emotion/styled";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
