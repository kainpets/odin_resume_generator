import React, { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

export class FormController extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phoneNumber, city } = this.state;
    const values = { firstName, lastName, email, phoneNumber, city };

    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>Hello</h1>;
      case 3:
        return <h1>Hello</h1>;
      case 4:
        return <h1>Hello</h1>;
    }

    return <div>FormController</div>;
  }
}

export default FormController;
