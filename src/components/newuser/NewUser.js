import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import Checkbox from '../checkbox/Checkbox'


const items = ["AK", "AL", "AR","AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV","WY"];

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


////// /// /// /// /// CHECKBOX /// /// /// /// /// /// 
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

createCheckboxes = () => (
  items.map(this.createCheckbox)
)
/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 



  render() {
    return (


      <div>
        <form>
          <FieldGroup
            className="form-field"
            id="formControlsFirstName"
            type="string"
            label="First Name"
            placeholder="First Name"
          />
          <FieldGroup
            className="form-field"
            id="formControlsFirstName"
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

          <FieldGroup
            className="form-field"
            id="formControlsMajor"
            type="string"
            label="Major"
            placeholder="Major"
          />

          <FieldGroup
            className="form-field"
            id="formControlsCost"
            type="string"
            label="Cost"
            placeholder="Cost"
          />

          <FieldGroup
            className="form-field"
            id="formControlsLocation"
            type="string"
            label="Location"
            placeholder="Location"
          />
{/* ////// /// /// /// /// CHECKBOX /// /// /// /// /// ///  */}

          <div className="container">
            <div className="row">
              <div className="col-sm-12">

                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}

                  {/* <button className="btn btn-default" type="submit">Save</button> */}
                </form>

              </div>
            </div>
          </div>

{/* ////// /// /// /// ///  /// /// /// /// /// ///  */}



          <Button className="btn btn-default"type="submit">
            Create Profile
          </Button>
        </form>
      </div>
    );
  }
}











//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12">

//             <form onSubmit={this.handleFormSubmit}>
//               {this.createCheckboxes()}

//               <button className="btn btn-default" type="submit">Save</button>
//             </form>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default NewUser;



