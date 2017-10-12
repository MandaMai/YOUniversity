import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

import './CharacterCard.css'

class CharacterCard extends Component {
  render() {

    let school = this.props.school || "";

    return (
      <Col xs={12} sm={6} md={3}>
        <Thumbnail className="text-center">
          <h3>{school["school.name"]}</h3>
        </Thumbnail>
      </Col>
    );
  }
}

export default CharacterCard;
