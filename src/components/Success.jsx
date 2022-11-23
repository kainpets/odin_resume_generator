import React, { Component } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export class Success extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const resume = this.props.values;

    return (
      <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>{resume.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>{resume.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{resume.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone Number</TableCell>
                <TableCell>{resume.phoneNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>City</TableCell>
                <TableCell>{resume.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>University</TableCell>
                <TableCell>{resume.university}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Degree</TableCell>
                <TableCell>{resume.degree}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell>{resume.educationStart}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>To</TableCell>
                <TableCell>{resume.educationEnd}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>University</TableCell>
                <TableCell>{resume.position}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Degree</TableCell>
                <TableCell>{resume.company}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell>{resume.workStart}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>To</TableCell>
                <TableCell>{resume.workEnd}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
        <Button variant="outlined" label="Back" onClick={this.back}>
          Back
        </Button>
      </>
    );
  }
}

export default Success;
