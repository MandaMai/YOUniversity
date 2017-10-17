import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './CurrentPreferences.css';





class CurrentPreferences extends Component {
  currentUser;


  
    render() {
       
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        console.log(`this.props.schools is ${JSON.stringify(this.props.schools)}`)
        console.log(`this.temp is ${JSON.stringify(this.temp)}`)

        console.log(this.currentUser)
        return (

            <div>
             
                < div className = "dashboardheader-container" >
                    <Col sm={12} md={12} lg={12} className="dashboardheading">
                        <h1>Hey {this.currentUser.firstName}!</h1>
           
                 
                        
                       
                    </Col>

                    <Col sm={12} md={6} lg={6} className="currentpreferences display">
                        <h2>Your current preferences:</h2>
                        <h5>Cost: {this.currentUser.preferences.cost}</h5>
                        <h5>State: {this.currentUser.preferences.state}</h5>
                        <h5>Major: {this.currentUser.preferences.major}</h5>
                     
                    </Col>

                    <Col sm={12} md={6} lg={6} className="favorites display">
                        <h2>Favorites List:</h2>
                        {/* <h5>: {this.props.schools.id}</h5> */}
                        <h5>School Name</h5>
                        <h5>School Name</h5>
                        <h5>School Name</h5>
                        
                    </Col>
                    <Col sm={12} md={6} lg={6} className="padding">
                       {/* padding */}

                    </Col>
                 
                </div>

            </div>

           
        );
    }
}

export default CurrentPreferences;
