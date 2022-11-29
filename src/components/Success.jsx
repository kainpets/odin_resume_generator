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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export class Success extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const resume = this.props.values;

    return (
      <>
      <TableContainer ref={(el) => (this.componentRef = el)} component={Paper}>
        <Box  sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Typography variant="h2">{resume.firstName}</Typography>
              <Typography variant="h2">{resume.lastName}</Typography>
            </Grid>
            <Grid item xs={4}>
              <ImageList>
                <ImageListItem>
                  <img
                    src={URL.createObjectURL(resume.photo)}
                    alt="resume-photo"
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </Grid>
            <Grid item vs={4}>
              <Typography variant="h6">
                {resume.email}
              </Typography>
            </Grid>
            <Grid item vs={4}>
              <Typography variant="h6">
                {resume.phoneNumber}
              </Typography>
            </Grid>
            <Grid item vs={4}>
              <Typography variant="h6">
                {resume.city}
              </Typography>
            </Grid>
          </Grid>
        </Box>
          <Table>
            <TableHead>
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
                <TableCell>Position</TableCell>
                <TableCell>{resume.position}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Company</TableCell>
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
