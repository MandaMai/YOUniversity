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

addProducts(5);

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
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

export default class SelectHookTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products } selectRow={ selectRowProp } pagination hover striped>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}