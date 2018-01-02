import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import LoaderButton from './LoaderButton';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    console.log('signup handlesubmit()');
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              type="confirmPassword"
              value={this.state.confirmPassword}
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="SignUp"
            loadingText="Signing in..."
          />
        </form>
      </div>
    );
  }
}