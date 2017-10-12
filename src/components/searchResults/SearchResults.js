import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

let order = 'desc';
// const products = [];

// function addProducts(quantity) {
//   const startId = products.length;
//   for (let i = 0; i < quantity; i++) {
//     const id = startId + i;
//     products.push({
//       id: id,
//       name: 'Item name ' + id,
//       price: 2100 + i
//     });
    
//   }
// }
// addProducts(80);



function onRowSelect(row, isSelected, e, rowIndex) {
  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': "' + row[prop] + '"';
  }
  console.log(e);
  alert(`Selected: ${isSelected}, rowIndex: ${rowIndex}, row: ${rowStr}`);
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

// function afterSearch(searchText, result) {
//   console.log('Your search text is ' + searchText);
//   console.log('Result is:');
//   for (let i = 0; i < result.length; i++) {
//     console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].cost);
//   }
// }

// const options = {
//   afterSearch: afterSearch  // define a after search hook
// };



export class SearchResults extends Component {
  data = [];

  componentDidMount() {
    console.log(this.props)
    this.props.renderSchools()
  }
 




  getLocale(index) {
    switch (index) {
      case 11:
        return "City: 250k+"
        break;
      case 12:
        return "City: 100-250k"
        break;
      case 13:
        return "City: <100k"
        break;
      case 21:
        return "Suburb: 250k+"
        break;
      case 22:
        return "Suburb: 100-250k"
        break;
      case 23:
        return "Suburb: <100k"
        break;
      case 31:
        return "Town: Fringe"
        break;
      case 32:
        return "Town: Distant"
        break;
      case 33:
        return "Town: Remote"
        break;
      case 41:
        return "Rural: Fringe"
        break;
      case 42:
        return "Rural: Distant"
        break;
      case 43:
        return "Rural: Remote"
        break;

      default:
        return "Other"
        break;
    }
  }
  render() {
    const getDegree = {
      0: 'Non-Degree-Granting',
      1: 'Certificate',
      2: 'Associate',
      3: "Bachelor's",
      4: 'Graduate'
  }
  
  const getOwnership = {
    1: "Public",
    2: "Private N-P",
    3: "Private F-P"
  }

    console.log(`this.props.schools is ${JSON.stringify(this.props.schools)}`)
    if(this.props.schools && this.props.schools.schools){
      this.data = this.props.schools.schools.map(
        school => {
          return { 
            id: school.id,
            name: school['school.name'],
            netCost: school['2015.cost.avg_net_price.public'],
            inState: school["2015.cost.tuition.in_state"],
            outState: school["2015.cost.tuition.out_of_state"],
            location: school["school.locale"],
            size: school["2015.student.size"],
            state: school["school.state"],
            admission: school["2015.admissions.admission_rate.overall"],
            highestDegree: getDegree[school["school.degrees_awarded.highest"]],
            ownership: school["school.ownership"]


          }
        }
      )
    

    // return inside the if
    return (
      
      <div>
        <BootstrapTable data={ this.data } selectRow={ selectRowProp } search exportCSV={ true } pagination striped>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 400 } }>School ID</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='7'>Basic School Info</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Name</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='size' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Size</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='location' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Location</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='state' dataSort filter={ { type: 'TextFilter', delay: 400 } }>State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='admission' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Admission %</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='highestDegree' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Highest Awarded Degree</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='ownership' dataSort filter={ { type: 'TextFilter', delay: 400 } }>School Type</TableHeaderColumn>

          <TableHeaderColumn row='0' colSpan='3'>School Cost Information</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='inState' dataSort filter={ { type: 'TextFilter', delay: 400 } }>In-State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='outState' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Out-Of-State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='netCost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Avg Net Cost</TableHeaderColumn>

          
          

          
        </BootstrapTable>
        <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
      </div>

    );
  }

  //return outside the if for when we are waiting for the data
  return (<div>loading...</div>)
}


 
} 

export default SearchResults;