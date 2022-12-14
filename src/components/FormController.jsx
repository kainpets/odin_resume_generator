import React, { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import Success from "./Success";

export class FormController extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    photo: "",
    university: "",
    degree: "",
    educationStart: "",
    educationEnd: "",
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

  // Handle photo upload

  handlePhotoUpload = (input) => (e) => {
    this.setState({ [input]: e.target.files[0] });
  };

  // Handle auto generate

  handleAutoGenerate = () => {
    this.setState({
      step: 4,
      firstName: "Paweł",
      lastName: "Stępniak",
      email: "pawelstepniak22@gmail.com",
      phoneNumber: "663058517",
      city: "Poznań",
      photo: "./pawel.jpg",
      university: "Adam Mickiewicz University",
      degree: "Law",
      educationStart: "2013",
      educationEnd: "2018",
    });
  };

  render() {
    const { step } = this.state;
    const values = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handlePhotoUpload={this.handlePhotoUpload}
            handleAutoGenerate={this.handleAutoGenerate}
          />
        );
      case 2:
        return (
          <EducationInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <ExperienceInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return <Success prevStep={this.prevStep} values={values} />;
    }

    return <div>FormController</div>;
  }
}

export default FormController;
