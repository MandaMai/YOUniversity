import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

import './CharacterCard.css'

class CharacterCard extends Component {
  render() {

    let character = this.props.character;

    return (
      <Col xs={12} sm={6} md={3}>
        <Thumbnail className="text-center" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}>
          <h3>{character.name}</h3>
        </Thumbnail>
      </Col>
    );
  }
}

export default CharacterCard;
