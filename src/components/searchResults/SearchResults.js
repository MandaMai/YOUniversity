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

  render() {
    console.log(`this.props.schools is ${JSON.stringify(this.props.schools)}`)
    if(this.props.schools && this.props.schools.schools){
      this.data = this.props.schools.schools.map(
        school => {
          return { 
            id: school.id,
            name: school['school.name'],
            cost: school['2015.cost.avg_net_price.public']
          }
        }
      )
    

    // return inside the if
    return (
      
      <div>
        <BootstrapTable data={ this.data } selectRow={ selectRowProp } search exportCSV={ true } pagination striped>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 400 } }>Product ID</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='2'>Basic School Info</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Name</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>State</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Location Type</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Student Size</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Admission Rate</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Bachelor's Degree Offered</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Associate's Degree Offered</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Highest Awarded Degree</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Predominant Awarded Degree</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='2'>School Cost Information</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>In-State Tuition</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Out-Of-State Tuition</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Program Year Tuition</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='cost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Average Net Price</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='price' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Academic Year Cost</TableHeaderColumn>
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