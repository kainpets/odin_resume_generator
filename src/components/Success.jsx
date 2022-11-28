import React, { Component } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReactToPrint from "react-to-print";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export class Success extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const resume = this.props.values;

    return (
      <>
        <Typography variant="h2">{resume.firstName}</Typography>
        <Typography variant="h2">{resume.lastName}</Typography>
        <ImageList
          sx={{
            width: 1 / 2,
            height: 400,
            objectFit: "contain",
            display: "inline-block",
          }}
        >
          <ImageListItem>
            <img
              src={URL.createObjectURL(resume.photo)}
              alt="resume-photo"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>

        <TableContainer
          component={Paper}
          ref={(el) => (this.componentRef = el)}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
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
        <Button variant="outlined" label="Print">
          <ReactToPrint
            trigger={() => {
              return <a href="#">PRINT</a>;
            }}
            content={() => this.componentRef}
          />
        </Button>
      </>
    );
  }
}

export default Success;
