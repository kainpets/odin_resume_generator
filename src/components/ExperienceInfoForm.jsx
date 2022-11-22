import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export class ExperienceInfoForm extends Component {
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
            Enter Your Experience
          </Typography>
        </AppBar>
        <TextField
          id="position"
          label="Position"
          variant="outlined"
          onChange={handleChange("position")}
        />
        <br />
        <TextField
          id="company"
          label="Company"
          variant="outlined"
          onChange={handleChange("company")}
        />
        <br />
        <TextField
          id="work-start"
          label="Start"
          variant="outlined"
          onChange={handleChange("workStart")}
        />
        <br />
        <TextField
          id="work-end"
          label="Finish"
          variant="outlined"
          onChange={handleChange("workEnd")}
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

export default ExperienceInfoForm;
