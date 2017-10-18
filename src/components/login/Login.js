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
          


          
           
        );
    }
}

export default Login;
