import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


import './Navigation.css';

import { Link } from 'react-router';

class Navigation extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">YOUniversity</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/dashboard">Home</Link></li>
                                <li><Link to="/favorites">Favorites</Link></li>
                                <li><Link to="/editpreferences">Edit Preferences</Link></li>
                                <li><Link to="/schooldetails">School Details</Link></li>
                                <li><Link to="/#">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default Navigation;
