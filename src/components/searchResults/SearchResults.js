import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import './SearchResults.css'



// import LandingNavigation from './components/landingnavigation/LandingNavigation'
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class SearchResults extends Component {
  render() {
    return (
      
      
      <div>
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
</link>
        Table will be here!
      </div>
    );
  }
}

export default SearchResults;
