import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import Checkbox from '../checkbox/Checkbox'
// import './Editpreferences.css';
import { states, majors, cost } from '../newuser/NewUser'


// const items = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

function FieldGroup({ id, label, help, ...props }) {
  return (
    
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class EditPreferences extends Component {


  ////// /// /// /// /// CHECKBOX /// /// /// /// /// /// /// /// ///
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = array => (
    array.map(this.createCheckbox)
  )
  /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {
    return (

  <div className="Wrapper">
        <Navigation />

      <div className="container">
    
        <form onSubmit={this.handleFormSubmit}>

       <h1>Edit Preferences</h1>
       <label>Majors</label>
       <div className="form-group">
         {this.createCheckboxes(majors)}
       </div>

       <label>Cost</label>
       <div className="form-group">
         {this.createCheckboxes(cost)}
       </div>

       <label>Location</label>
       <div className="form-group">
         {this.createCheckboxes(states)}
       </div>



          <Button className="btn btn-default" type="submit">
            Search
          </Button>
        </form>
      </div>
      </div>
    );
  }
}


export default EditPreferences;


