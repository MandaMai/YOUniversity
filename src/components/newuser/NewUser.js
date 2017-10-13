import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import Checkbox from '../checkbox/Checkbox'
import './NewUser.css';

import {UserModel} from '../../models/UserModel'

const preferencesFields = ["cost","location","major"];

export const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV','WY'];

export const majors = ['education', 'mathematics', 'business_marketing', 'communications_technology', 'language', 'visual_performing', 'engineering_technology', 'parks_recreation_fitness', 'agriculture', 'security_law_enforcement', 'computer', 'precision_production', 'humanities', 'library', 'psychology', 'social_science', 'legal', 'english', 'construction', 'military', 'communication', 'public_administration_social_service', 'architecture', 'ethnic_cultural_gender', 'resources', 'health', 'engineering', 'history', 'theology_religious_vocation', 'transportation', 'physical_science', 'science_technology', 'biological', 'family_consumer_science', 'philosophy_religious', 'personal_culinary', 'multidiscipline', 'mechanic_repair_technology']

export const cost = [ '$0-2,000', 'up to $5,000', 'up to $10,000', 'up to $30,000', 'up to $50,000', 'any' ]

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

renderOptions(value, key){
  return <option key={key} value={value}>{value}</option>
}

handleFormSubmit = formSubmitEvent => {
  formSubmitEvent.preventDefault();
  let formData = new UserModel;
  for (const input of formSubmitEvent.target) {
    
    if(input.value){
      if(preferencesFields.includes(input.name)){
        switch(input.name){
            case 'major':
            case "location":
              var value = "";
              for (var i = 0; i < input.length; i++) {
                console.log(input.length)
                if (input[i].selected) {
                  value += input[i].value + ","
                }
              }
              let lastComma =  value.lastIndexOf(',');
              
              formData.preferences[input.name] = value.substring(0, lastComma);
            break;
          default:
            formData.preferences[input.name] = input.value
        }
      }else{
        formData[input.name] = input.value
      }
        
    }
    
  }

  this.props.createUser(formData)

}

/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {
    
    return (


      <div className = "parentContainer">
      <Button onClick={this.routeBacktoLanding.bind(this)} bsStyle="primary">Back</Button>
      <div className="container">
      

      

    
    
        <form onSubmit={this.handleFormSubmit}>
 

          <h1>New User Profile</h1>

          <FieldGroup
            className="form-field"
            id="formControlsFirstName"
            type="string"
            label="First Name"
            placeholder="First Name"
            name="firstName"
          />
          <FieldGroup
            className="form-field"
            id="formControlsLastName"
            type="string"
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
          />

          <FieldGroup
            className="form-field"
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            name="username"
          />
          <FieldGroup
            className="form-field"
            id="formControlsPassword"
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
          />






{/* ////// /// /// /// /// CHECKBOX /// /// /// /// /// ///  */}  
          
          <label>Major</label>


          <div className="form-group">
            <select multiple="true" name="major">
              {majors.map(this.renderOptions)}
            </select>
          </div>

  <br />      
          <label>Location</label>
           <div className="form-group">
           <select multiple="true" name="location">
              {states.map(this.renderOptions)}
            </select> 
          </div>
       
{/* ////// /// /// /// ///  /// /// /// /// /// /// /// /// */}

<Button  className="btn btn-default"type="submit">Create Profile</Button>


 

        </form>
      </div>
      </div>

    );
  }
}


export default NewUser;



