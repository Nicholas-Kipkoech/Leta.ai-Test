import Navbar from "../Navbar/Navbar";

import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  StyledTableCell,
  StyledTableRow,
} from "../../reusableComponents/StyledComponents";
import { useSelector } from "react-redux";

const Dashboard = () => {
  //...get contacts from the array
  const { contacts } = useSelector((state: any) => state.contacts);

  return (
    <div className="w-full mr-60 ml-60 justify-center ">
      <Navbar />
      <div className="justify-center mt-7 mb-7">
        <Button color="primary" className="bg-blue-400">
          Add Contact
        </Button>

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
              {contacts.map((contact: any) => (
                <StyledTableRow key={contact.id}>
                  <StyledTableCell component="th" scope="row">
                    {contact.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {contact.phone}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {contact.email}
                  </StyledTableCell>

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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;
