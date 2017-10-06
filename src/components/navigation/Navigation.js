import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import SearchCharacters from '../../containers/SearchCharacters'

export class Navigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            YOUniversity
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
       
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
