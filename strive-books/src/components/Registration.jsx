import Component from "react";

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

    showComplete: false,
  };

  handleInput = (key, value) => {
    this.setState({
      registration: { ...this.state.registration, [key]: value },
    });
  };

  formIsValidated = () => {
    let isValidated = false;
    if (
      this.state.registration.name.length >= 2 &&
      this.state.registration.surname.length >= 3 &&
      this.state.registration.password.length >= 8 &&
      this.state.registration.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
      ) &&
      this.state.registration.password ===
        this.state.registration.passwordConfirm
    ) {
      isValidated = true;
    }
    return isValidated;
  };

  handleRegistration = (e) => {
    e.preventDefault();
    this.setState({ showComplete: true });
  }