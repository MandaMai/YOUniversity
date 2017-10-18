import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';


// import './Editpreferences.css';
import { states, majors, cost } from '../newuser/NewUser'

import './EditPreferences.css';
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

  // routetoLanding(tempUser) {
  //   browserHistory.push('/login');
  // }


  routetoDashboard(tempUser) {
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
    this.routetoDashboard(localStorage.getItem("currentUser"));

  }

  /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {


    // let statusMessage = (this.props.user.user) ? <div className='alert alert-success'>User Created Successfully</div> : "";

    return (


      <div className="parentContainer">
        <Button className="pull-right" onClick={this.routetoDashboard.bind(this)} bsStyle="primary" id="backbutton">Back</Button>
        <div className="container">


      
          {/* {statusMessage} */}


          <form onSubmit={this.handleFormSubmit} id="newuser">


            <h1>Edit Preferences</h1>

           



            <label><h4>Preferences</h4></label>

            <table className="center">
              <tr>
                <th><label>States (select one or more)</label></th>
                <th><label>Area of Study (select one)</label></th>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <select multiple="true" name="location">
                      {states.map(this.renderOptions)}
                    </select>
                  </div>
                  <br />
                </td>

                <td>
                  <div className="form-group">
                    <select name="major">
                      {majors.map(this.renderOptions)}
                    </select>
                  </div>
                </td>
                <br />
              </tr>
            </table>

            {/* ////// /// /// /// ///  /// /// /// /// /// /// /// /// */}

            <Button className="btn btn-default" type="submit" id="subnewuser">Create Profile</Button>




          </form>
        </div>
      </div>

    );

  }
}






export default EditPreferences;


