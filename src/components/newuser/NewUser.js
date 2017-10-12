import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import Checkbox from '../checkbox/Checkbox'
import './NewUser.css';


export const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV','WY'];

export const majors = ['education', 'mathematics', 'business_marketing', 'communications_technology', 'language', 'visual_performing', 'engineering_technology', 'parks_recreation_fitness', 'agriculture', 'security_law_enforcement', 'computer', 'precision_production', 'humanities', 'library', 'psychology', 'social_science', 'legal', 'english', 'construction', 'military', 'communication', 'public_administration_social_service', 'architecture', 'ethnic_cultural_gender', 'resources', 'health', 'engineering', 'history', 'theology_religious_vocation', 'transportation', 'physical_science', 'science_technology', 'biological', 'family_consumer_science', 'philosophy_religious', 'personal_culinary', 'multidiscipline', 'mechanic_repair_technology']

export const cost = ['$0-2,000', 'up to $5,000', 'up to $10,000', 'up to $30,000', 'up to $50,000', 'any' ]






function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class NewUser extends Component {


  routeBacktoLanding() {
    browserHistory.push('/#');
  }


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

      <div className="container">
      <Button onClick={this.routeBacktoLanding.bind(this)} className="return-to-landing" bsStyle="primary" bsSize="large" block>Back</Button>


    
    
        <form onSubmit={this.handleFormSubmit}>
            <h1>New User Profile</h1>     

            
          <FieldGroup
            className="form-field"
            id="formControlsFirstName"
            type="string"
            label="First Name"
            placeholder="First Name"
          />
          <FieldGroup
            className="form-field"
            id="formControlsLastName"
            type="string"
            label="Last Name"
            placeholder="Last Name"
          />

          <FieldGroup
            className="form-field"
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            className="form-field"
            id="formControlsPassword"
            type="password"
            label="Password"
            placeholder="Password"
          />




  {/* ////// /// /// /// /// CHECKBOX /// /// /// /// /// ///  */}  
          <label>Majors</label>
          <div className="form-group">
            { this.createCheckboxes(majors) }
          </div>

          <label>Cost</label>
          <div className="form-group">
            {this.createCheckboxes(cost)}
          </div>
        
          <label>Location</label>
           <div className="form-group">
            { this.createCheckboxes(states) }       
          </div>
{/* ////// /// /// /// ///  /// /// /// /// /// /// /// /// */}

          <Button className="btn btn-default"type="submit">
            Create Profile
          </Button>
        </form>
      </div>
       
    );
  }
}



export default NewUser;



