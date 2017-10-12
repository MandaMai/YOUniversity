import { connect } from 'react-redux'
import { getSchools } from '../actions/school'
import {SchoolList} from '../components/schoolList/SchoolList'

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
)(SchoolList)

export default Schools
