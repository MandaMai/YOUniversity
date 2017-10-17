import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './CurrentPreferences.css';

let tempName = "";
let tempLocation = "";
let tempMajor = "";
let school1 = "";
let school2 = "";
let school3 = "";



class CurrentPreferences extends Component {
  currentUser;


  
    render() {
       
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        tempName = this.currentUser.firstName;
        tempLocation = this.currentUser.location;
        tempMajor = this.currentUser.major;
        // console.log("Stuff in the favorites list: " + this.currentUser.schoolList.length);
        // console.log(tempName);
        // console.log(tempLocation);
        // console.log(tempMajor);
        if(this.currentUser.schoolList.length>0){
            school1 = this.currentUser.schoolList.schools[0].schoolName;
            school2 = this.currentUser.schoolList.schools[1].schoolName;
            school3 = this.currentUser.schoolList.schools[2].schoolName;
        }else{
            school1="Favorite Not Yet Assigned"
            school2 ="Favorite Not Yet Assigned"
            school3="Favorite Not Yet Assigned"
        }


        if(this.currentUser.firstName != "" && this.currentUser.preferences.location != "" && this.currentUser.preferences.major != "") {
        
        // console.log(`this.props.schools is ${JSON.stringify(this.props.schools)}`)
        // console.log(`this.temp is ${JSON.stringify(this.temp)}`)

        console.log(this.currentUser)

        if(this.currentUser.schoolList.length>0){
        console.log("School test: " + this.currentUser.schoolList.schools[0].schoolName)
        }else {
            console.log("No schools currently on the favorites list")
        }


        return  (
                   <div>
             
                < div className = "dashboardheader-container" >
                    <Col sm={12} md={12} lg={12} className="dashboardheading">
                        <h1>Hey {this.currentUser.firstName}!</h1>
           
                 
                        
                       
                    </Col>

                    <Col sm={12} md={6} lg={6} className="currentpreferences display">
                        <h2>Your current preferences:</h2>
                        <h5>State:  {this.currentUser.preferences.location}</h5>
                        <h5>Major:  {this.currentUser.preferences.major}</h5>
                     
                    </Col>

                    <Col sm={12} md={6} lg={6} className="favorites display">
                        <h2>Favorites List:</h2>
                        
                        <h5>{school1}</h5>
                        <h5>{school2}</h5>
                        <h5>{school3}</h5>
                        
                    </Col>
                    <Col sm={12} md={6} lg={6} className="padding">
                       {/* padding */}

                    </Col>
                 
                </div>

            </div>
    
        );
        }
        return (
            <div>loading...</div>
 
           
        );
    }
}

export default CurrentPreferences;
