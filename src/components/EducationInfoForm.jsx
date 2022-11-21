import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export class EducationInfoForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { handleChange } = this.props;

    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Enter Your Education
          </Typography>
        </AppBar>
        <TextField
          id="university"
          label="University"
          variant="outlined"
          onChange={handleChange("university")}
        />
        <br />
        <TextField
          id="degree"
          label="Degree"
          variant="outlined"
          onChange={handleChange("degree")}
        />
        <br />
        <TextField
          id="education-start"
          label="Start"
          variant="outlined"
          onChange={handleChange("educationStart")}
        />
        <br />
        <TextField
          id="education-end"
          label="Finish"
          variant="outlined"
          onChange={handleChange("educationEnd")}
        />
        <br />
        <Button variant="outlined" label="Back" 
        onClick={this.back}>
        back
        </Button>
        <br />
        <Button variant="outlined" label="Continue" 
        onClick={this.continue}>
        Continue
        </Button>
      </>
    );
  }
}

export default EducationInfoForm;
