import React, { Component } from 'react';
import './Collegecarousel.css';
import { Carousel } from 'react-bootstrap';

class Collegecarousel extends Component {
  render() {
    return (
        // use React-Bootstrap Carousel
        <Carousel id="carousel-college">
            <Carousel.Item>
                <img src="/assets/images/1_halls.jpg" alt="school halls"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/images/2_graduates.jpg" alt="graduates"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/images/3_path.jpg" alt="school view"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts Here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img src="/assets/images/4_library" alt="school library"/>
                <Carousel.Caption className="caption">
                    <h1>Welcome to YOUniversity</h1>
                    <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2>
                    <h1> Begin your Academic Adventure</h1>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img src="/assets/images/5_school.jpg" alt="school"/>
                <Carousel.Caption className="caption">
                    {<h2>Welcome to</h2>}
                    <h1>YOUniversity</h1>
                    {/* <h2>Empowering you to find your DREAM School</h2>
                    <h2>Login or create your new user account and.....</h2> */}
                    <h2><i>Your Academic Adventure Starts here</i></h2>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    );
  }
}

export default Collegecarousel;