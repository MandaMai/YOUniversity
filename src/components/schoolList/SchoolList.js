import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class SchoolList extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.renderSchools();
  }

  render() {

    let schools = "Loading...";

    if(!_.isEmpty(this.props.schools)){

      if(this.props.schools.schools.length){
        schools = this.props.schools.schools.map(
          (school) => <CharacterCard key={school.id} school={school} />
        );
      }else{
        schools = "No characters found!"
      }
      
    }
    console.log(schools);
    return (
        <div>
         {schools}
        </div>
    );
  }
}

export default SchoolList;
