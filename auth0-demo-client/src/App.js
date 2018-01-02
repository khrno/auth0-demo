import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                <NavItem><Link to="/login">Login</Link></NavItem>
                <NavItem><Link to="/logout">Logout</Link></NavItem>
                <NavItem><Link to="/signup">Signup</Link></NavItem>
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
