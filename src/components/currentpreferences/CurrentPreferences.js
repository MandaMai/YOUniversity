import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './CurrentPreferences.css';





class CurrentPreferences extends Component {
    dataToSend = [];

    componentDidMount() {
        if (!this.dataToSend.length) {
            this.props.renderUser()
        }

    }

    render() {
        console.log(`this.props.user is ${JSON.stringify(this.props.user)}`)
        if (this.props.user && this.props.user.user) {
            this.dataToSend = this.props.user.user.map(
                user => {
                    return {
                        id: user.id,
                        firstName: user['user.firstname'],
                  
                    }
                }
            )


        return (



            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                </Row>

                <Row className="show-grid">
                    <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                    <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                </Row>
            </Grid>
            </div>
        );
    }
}}
