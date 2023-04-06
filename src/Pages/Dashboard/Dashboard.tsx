import Navbar from "../Navbar/Navbar";

import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

const Dashboard = () => {
  //get token for authorization

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <div className="w-full mr-60 ml-60 justify-center ">
      <Navbar />
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right" className="text-red-400">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                hello
              </StyledTableCell>
              <StyledTableCell align="right">hello</StyledTableCell>
              <StyledTableCell align="right">hello</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonGroup
                  variant="contained"
                  aria-label="contained primary button group"
                  className="gap-5"
                >
                  <Button color="primary">Edit</Button>
                  <Button color="error">Delete</Button>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
