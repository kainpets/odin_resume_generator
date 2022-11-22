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
    const keys = Object.keys(this.props.values);
    const values = Object.values(this.props.values);

    return (
      <>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Keys</TableCell>
              <TableCell>Values</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.map(key => {
              return (
                <TableRow 
                  key={key}
                >
                  <TableCell>
                    {key}                  
                  </TableCell>
                </TableRow>
              )
            })}
            {values.map(value => {
              return (
                <TableRow 
                  value={value}
                >
                  <TableCell>
                    {value}                  
                  </TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </TableContainer>
        <Button variant="outlined" label="Back" onClick={this.back}>
          Back
        </Button>
      </>
    );
  }
}

export default Success;
