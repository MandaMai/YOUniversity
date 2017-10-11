// import './SearchResults.css'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// import React, { Component } from 'react';

// var ReactDOM = require('react-dom');
// var ReactBsTable  = require('react-bootstrap-table');


// var products = [{
//       id: 1,
//       name: "Product1",
//       price: 120
//   }, {
//       id: 2,
//       name: "Product2",
//       price: 80
//   }];

// class SearchResults extends Component {
//   render() {

//     const selectRow = {
//       mode: 'checkbox',
//       bgColor: 'pink',
//       className: 'my-selection-custom'
//     };

//     return (
//       <div>
//         <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
// </link>
// <BootstrapTable data={products} selectRow={ selectRow } striped hover>
//       <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
//       <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
//       <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
//   </BootstrapTable>
// <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
//       </div>
//     );
//   }
// }

// export default SearchResults;

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

let order = 'desc';
const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(80);



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
  // clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

function formatFloat(cell, row) {
  return parseFloat(cell);
}

function afterSearch(searchText, result) {
  console.log('Your search text is ' + searchText);
  console.log('Result is:');
  for (let i = 0; i < result.length; i++) {
    console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }
}

const options = {
  afterSearch: afterSearch  // define a after search hook
};

class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

export default class SearchResults extends React.Component {
  
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    if (row.id < 2) return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }
  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };

    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp } search exportCSV={ true } 
      expandComponent={ this.expandComponent }pagination hover striped>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 400 } }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}