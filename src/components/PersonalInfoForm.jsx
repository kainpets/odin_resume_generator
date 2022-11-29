import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export class PersonalInfoForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  autoGenerate = (e) => {
    e.preventDefault();
    this.props.handleAutoGenerate();
  }

  render() {
    const { handleChange, handlePhotoUpload } = this.props;

    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Enter Your Personal Details
          </Typography>
        </AppBar>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          onChange={handleChange("firstName")}
        />
        <br />
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          onChange={handleChange("lastName")}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={handleChange("email")}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="outlined"
          onChange={handleChange("phoneNumber")}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          onChange={handleChange("city")}
        />
        <br />
        <TextField
          id="photo"
          variant="outlined"
          type="file"
          onChange={handlePhotoUpload("photo")}
        />
        <br />
        <Button variant="outlined" label="Continue" 
        onClick={this.continue}>
        Continue
        </Button>
        <br />
        <Button variant="outlined" label="Auto Generate Content" 
        onClick={this.autoGenerate}>
        Auto Generate Content
        </Button>
      </>
    );
  }
}

export default PersonalInfoForm;
