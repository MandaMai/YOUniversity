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
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';




let order = 'desc';
const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i < 3) {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
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
  // clickToSelect: true, --> use this for favorite list to pull up details. this will allow you to click row to select it.
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



export default class SearchResults extends React.Component {


  render() {


    return (
      
      <BootstrapTable data={ products } selectRow={ selectRowProp } search exportCSV={ true } pagination striped>
          <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 400 } }>Product ID</TableHeaderColumn>
          <TableHeaderColumn row='0' colSpan='2'>School Info</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='name' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Product Name</TableHeaderColumn>
          <TableHeaderColumn row='1' dataField='price' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
          dataFormat={ formatFloat }>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
    <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
  }
  
}