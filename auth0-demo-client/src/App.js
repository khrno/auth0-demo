import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './css/App.css'
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: false
    };
  }

  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              Demo - Client
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>Logout</NavItem>
              <NavItem>SignUp</NavItem>
              <NavItem>Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Home />
        </div>
      </div>
    )
  }
}

export default App;
