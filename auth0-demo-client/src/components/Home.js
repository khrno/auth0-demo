import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome</h1>
        <p>This is a simple auth0 demo client.</p>
        <p>Please enter to see the content of this site.</p>
        <p><Button bsStyle="primary">Login</Button></p>
      </Jumbotron>
    );
  }
};