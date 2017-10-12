import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';




// function addProducts(quantity) {
//   for (let i = 0; i < quantity; i++) {
//     products.push({
//       id: school.id,
//       name: school["school.name"],
//       cost: school["2015.cost.avg_net_price.public"]
//     });
    
//   }
// }



export default class ReportCard extends Component {

  render() {

    let school = this.props.school || "";
    let tempItem = [];
    tempItem.push({
      id: school.id,
      name: school["school.name"],
      cost: school["2015.cost.avg_net_price.public"]
    })
    console.log("from ReportCard");
    console.log(tempItem);
    

    return (
      

  <h3>{school["school.name"]}</h3>

      
    );
  }
  }