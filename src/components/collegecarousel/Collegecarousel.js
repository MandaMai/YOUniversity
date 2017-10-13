import React, { Component } from 'react';
import './Collegecarousel.css';
import { Carousel } from 'react-bootstrap';

class Collegecarousel extends Component {
  render() {
    return (
        // use React-Bootstrap Carousel
        <Carousel id="carousel-college">
            <Carousel.Item>
                <img src="/assets/graduation1.jpg" alt="graduation1"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/amherstcollege.jpg" alt="amherstcollege"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/studentsoutsidedorms.jpg" alt="studentsoutsidedorms"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/harvard-boston.jpg" alt="harvard-boston"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1> Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/studentstudying.jpg" alt="studentstudying"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/UWCherries.jpg" alt="UWCherries"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/graduation2.jpg" alt="graduation2"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/berkeleyuniversity.jpg" alt="berkeleyuniversity"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1>Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    );
  }
}

export default Collegecarousel;