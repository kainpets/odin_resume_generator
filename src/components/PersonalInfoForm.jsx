import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export class PersonalInfoForm extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Enter Your Personal Details
          </Typography>
        </AppBar>
        <TextField id="first-name" label="First Name" variant="outlined" />
        <TextField id="last-name" label="Last Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="phone-number" label="Phone Number" variant="outlined" />
        <TextField id="city" label="City" variant="outlined" />
        <Button variant="outlined">Continue</Button>
      </>
    );
  }
}

export default PersonalInfoForm;
