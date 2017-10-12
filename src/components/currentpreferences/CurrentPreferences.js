import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './CurrentPreferences.css';



export class CurrentPreferences extends Component {


    render() {


        return (
            <Grid>
                <Row>
                    <div className="placeholder">
                        <h3>Placeholder</h3>
                        <h4>Here we will put their current preferences and the snapshot of their favorites list</h4>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default CurrentPreferences;
