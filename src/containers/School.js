import { connect } from 'react-redux'
import { getSchools } from '../actions/school'
import { SearchResults } from '../components/searchResults/SearchResults'

const mapStateToProps = state => {
  return {
    schools: state.schools,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  let majorItem;
  if(this.currentUser.preferences.major==="all"){
    majorItem = ""
  }else{
    majorItem = this.currentUser.preferences.major
  }
  return {
    renderSchools: () => {
      dispatch(getSchools(this.currentUser.preferences.location, majorItem))
    }
  }
}

const Schools = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

export default Schools
