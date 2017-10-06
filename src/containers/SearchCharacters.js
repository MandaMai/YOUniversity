import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../actions/character'
import { Navbar, Button, FormGroup } from 'react-bootstrap';


let SearchCharacters = ({ dispatch }) => {

  let input

  return (
    <Navbar.Form pullRight>
      <form onSubmit={e=>e.preventDefault()}>
        <FormGroup>
          <input ref={node => {input = node}} type="text" placeholder="Search" className="form-control" />
        </FormGroup>
        {' '}
        <Button onClick={ () => {
          if (!input.value.trim()) {
            dispatch(getCharacters())
          }else{
            dispatch(getCharacters(input.value))
          }
          }} type="submit">Submit</Button>
      </form>
    </Navbar.Form>
  )
}
SearchCharacters = connect()(SearchCharacters)

export default SearchCharacters
