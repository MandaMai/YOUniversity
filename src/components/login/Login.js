import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Login.css';
import '../landing/Landing'




class Login extends Component {
  currentUser;


  
    render() {
       
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"))

        console.log(this.currentUser)
        return (
          <h2>Welcome {this.currentUser.firstName}!</h2>
            // <div>
             
            //     < div className = "dashboardheader-container" >
            //         <Col sm={12} md={12} lg={12} className="dashboardheading">
            //             <h1>Hey {this.currentUser.firstName}!</h1>
           
                 
                        
                       
            //         </Col>

            //         <Col sm={12} md={6} lg={6} className="currentpreferences display">
            //             <h2>Your current preferences:</h2>
                     
            //         </Col>

            //         <Col sm={12} md={6} lg={6} className="favorites display">
            //             <h2>Favorites List:</h2>
                        
            //         </Col>
            //         <Col sm={12} md={6} lg={6} className="padding">
            //            {/* padding */}

            //         </Col>
                 
            //     </div>

            // </div>

           
        );
    }
}

export default Login;