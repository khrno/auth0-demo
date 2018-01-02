import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouteNavItem from './utils/RouteNavItem';
import './css/App.css';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: false,
    };
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <Navbar fluid collapseOnSelect inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Demo - Client</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <RouteNavItem key={1} href="/login">Login</RouteNavItem>
                <RouteNavItem key={2} href="/logout">Logout</RouteNavItem>
                <RouteNavItem key={3} href="/signup">Signup</RouteNavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
