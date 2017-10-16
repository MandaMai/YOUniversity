import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './Favorites.css'
import { Link } from 'react-router';



function onRowSelect(row, isSelected, e, rowIndex) {
  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': "' + row[prop] + '"';
  }
  console.log(e);
  alert(`Selected: ${isSelected}, rowIndex: ${rowIndex}, row: ${rowStr}`);
  alert("Are you sure you want to remove this from your list?");
}

function onSelectAll(isSelected, rows) {
  alert(`is select all: ${isSelected}`);
  if (isSelected) {
    alert('Current display and selected data: ');
  } else {
    alert('unselect rows: ');
  }
  for (let i = 0; i < rows.length; i++) {
    alert(rows[i].id);
  }
}

const selectRowProp = {
  mode: 'checkbox',
  // clickToSelect: true, --> use this for favorite list to pull up details. this will allow you to click row to select it.
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

function formatFloat(cell, row) {
  return parseFloat(cell);
}





export class Favorites extends Component {
  data = [];
  // temp = {
  //           id: 5,
  //           name: "Eastern Washington University",
  //           netCost: 42,
  //           inState: 4242,
  //           outState: 424242,
  //           location: "Town: Fringe",
  //           size: 2000,
  //           state: "WA",
  //           admission: .85,
  //           highestDegree: "Graduate",
  //           ownership: "Public",
  //           schoolUrl: "http://www.ewu.edu"
  // }
  
  componentDidMount() {
    if(!this.data.length){
      this.props.renderFavorites()
    }
  }

  linkFormatter(cell, row) {
    console.log(cell)
    return '<a href="http://'+cell+'" target="_blank">'+cell+'</a>';
  }

  // internalLinkFormatter(cell, row) {
  //   console.log(cell)
  //   return '<a href=schooldetails/'+cell+' target="_blank">Details</a>';
  // }
 
  render() {
    // this.data.push(this.temp);
  //   const getDegree = {
  //     0: 'Non-Degree-Granting',
  //     1: 'Certificate',
  //     2: 'Associate',
  //     3: "Bachelor's",
  //     4: 'Graduate'
  // }
  
  // const getOwnership = {
  //   1: "Public",
  //   2: "Private N-P",
  //   3: "Private F-P"
  // }

  // const getLocale = {
  //   11:"City: 250k+",
  //   12:"City: 100-250k",
  //   13:"City: <100k",
  //   21:"Suburb: 250k+",
  //   22:"Suburb: 100-250k",
  //   23:"Suburb: <100k",
  //   31:"Town: Fringe",
  //   32:"Town: Distant",
  //   33:"Town: Remote",
  //   41:"Rural: Fringe",
  //   42:"Rural: Distant",
  //   43:"Rural: Remote"
  // }
  console.log(`this.props.schools is ${JSON.stringify(this.props.schools)}`)
    console.log(`this.temp is ${JSON.stringify(this.temp)}`)
    // if(this.props.schools && this.props.schools.schools){
    if(this.temp && this.temp){
      this.data = this.temp.map(
        favorite => {
          let temp = parseInt(this.temp.netCost)
          let nameLink = this.temp.schoolUrl

          return { 
            // id: school.id,
            // name: school['school.name'],
            // netCost: temp,
            // inState: school["2015.cost.tuition.in_state"],
            // outState: school["2015.cost.tuition.out_of_state"],
            // location: getLocale[school["school.locale"]],
            // size: school["2015.student.size"],
            // state: school["school.state"],
            // admission: school["2015.admissions.admission_rate.overall"],
            // highestDegree: getDegree[school["school.degrees_awarded.highest"]],
            // ownership: getOwnership[school["school.ownership"]],
            // schoolUrl: nameLink
          }
        }
      )
    

    // return inside the if
    return (
      <div>
        {/* <BootstrapTable data={ this.data } selectRow={ selectRowProp } search exportCSV={ true } pagination striped> */}
        <BootstrapTable data={ this.data } selectRow={ selectRowProp } search exportCSV={ true } pagination striped>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } width={'50'} dataFormat={this.internalLinkFormatter}></TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='7'>Basic School Info</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort width={"300"} filter={ { type: 'TextFilter', delay: 400 } }>Name</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='size' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Size</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='location' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Location</TableHeaderColumn>
          <TableHeaderColumn id="state" row='1' dataField='state' dataSort width={"80"} filter={ { type: 'TextFilter', delay: 400 } }>ST</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='admission' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Admission %</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='highestDegree' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Highest Degree</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='schoolUrl' dataFormat={this.linkFormatter} dataSort filter={ { type: 'TextFilter', delay: 400 } }>School URL</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='3'>School Cost Information</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='inState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>In-State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='outState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Out-of-State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='netCost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Avg Net</TableHeaderColumn>
        </BootstrapTable>
        <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
      </div>

    );
  }

  //return outside the if for when we are waiting for the data
  return (<div>loading...</div>)
}


 
} 

export default Favorites;