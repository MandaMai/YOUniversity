import { connect } from 'react-redux'
import { getSchools } from '../actions/school'
import { SearchResults } from '../components/searchResults/SearchResults'

const mapStateToProps = state => {
  return {
    schools: state.schools
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderSchools: () => {
      dispatch(getSchools("WA", "education", "7000"))
    }
  }
}

const Schools = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

export default Schools
