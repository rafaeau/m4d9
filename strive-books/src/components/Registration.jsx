import {Form, Button, Container, Row, Col, Badge} from "react-bootstrap";
import {Component} from "react"

class Registration extends Component {
  state = {
    registration: {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
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

  render() {
    return (
      <div className="align-items-center d-flex">
        {this.state.showComplete ? (
          <Container>
            <Row className="mb-2">
            <h1>Registration done successfully!</h1>
            </Row>
            <h4>DETAILS:</h4>
            <p>{this.state.registration.name}</p>
            <p>{this.state.registration.surname}</p>
            <p>{this.state.registration.email}</p>
          </Container>
        ) : (
          <Container md={8}>
              <Row>
            <h3 className="mb-3">REGISTRATION FORM</h3>
            </Row>
            <Form onSubmit={this.handleRegistration}>
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => this.handleInput("name", e.target.value)}
                  value={this.state.registration.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => this.handleInput("surname", e.target.value)}
                  value={this.state.registration.surname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(e) => this.handleInput("email", e.target.value)}
                  value={this.state.registration.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => this.handleInput("password", e.target.value)}
                  value={this.state.registration.password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) =>
                    this.handleInput("passwordConfirm", e.target.value)
                  }
                  value={this.state.registration.passwordConfirm}
                />
              </Form.Group>
              <Button type="submit" disabled={!this.formIsValidated()}>
                Send
              </Button>
            </Form>
          </Container>
        )}
      </div>
    );
  }
}

export default Registration