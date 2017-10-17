import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';


// import './Editpreferences.css';
import { states, majors, cost } from '../newuser/NewUser'


// import './NewUser.css';

import { UserModel } from '../../models/UserModel'
import { PreferencesModel } from '../../models/PreferencesModel'

const preferencesFields = Object.keys(new PreferencesModel);


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


  routetoDashboard() {
    browserHistory.push('/dashboard');
  }
  // onClick = { this.routetoDashboard.bind(this) } 


  renderOptions(value, key) {
    return <option key={key} value={value}>{value}</option>
  }


  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    let formData = new UserModel;


    for (const input of formSubmitEvent.target) {

      if (!input.value) {
        continue;
      }

      switch (input.name) {

        case 'major':
        case "location":
          var value = "";
          for (var i = 0; i < input.length; i++) {
            console.log(input.length)
            if (input[i].selected) {
              value += input[i].value + ","
            }
          }

          let lastComma = value.lastIndexOf(',');

          formData.preferences[input.name] = value.substring(0, lastComma);
          break;

        default:

          if (preferencesFields.includes(input.name)) {
            formData.preferences[input.name] = input.value
          } else {
            formData[input.name] = input.value
          }

      }

    }

    console.log(formData)

    //make the api call
    this.props.editUser(formData)

  }

  /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {


    // let statusMessage = (this.props.user.user) ? <div className='alert alert-success'>User Created Successfully</div> : "";

    return (


      <div className="parentContainer">
        <Button onClick={this.routetoDashboard.bind(this)} bsStyle="primary">Back</Button>
        <div className="container">


      
          {/* {statusMessage} */}


          <form onSubmit={this.handleFormSubmit}>


            <h1>Edit Preferences</h1>

           

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

        

            <Button className="btn btn-default" type="submit">Update</Button>




          </form>
        </div>
      </div>

    );

  }
}






export default EditPreferences;


