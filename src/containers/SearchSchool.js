import React from 'react'
import { connect } from 'react-redux'
import { getSchool } from '../actions/school'
import { Navbar, Button, FormGroup } from 'react-bootstrap';


// let SearchSchools = ({ dispatch }) => {

//   let input

//   return (
//     <Navbar.Form pullRight>
//       <form onSubmit={e=>e.preventDefault()}>
//         <FormGroup>
//           <input ref={node => {input = node}} type="text" placeholder="Search" className="form-control" />
//         </FormGroup>
//         {' '}
//         <Button onClick={ () => {
//           if (!input.value.trim()) {
//             dispatch(getSchools())
//           }else{
//             dispatch(getSchools(input.value))
//           }
//           }} type="submit">Submit</Button>
//       </form>
//     </Navbar.Form>
//   )
// }
// SearchSchools = connect()(SearchSchools)

export default SearchSchools
