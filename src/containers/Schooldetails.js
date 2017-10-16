import { connect } from 'react-redux'
import { getSchooldetails } from '../actions/schooldetails'
import { SchoolDetails } from '../components/schooldetails/Schooldetails'

const mapStateToProps = state => {
  return {
    schooldetails: state.schooldetails
  }
}

// let schoolid = this.props.params.id;

const mapDispatchToProps = dispatch => {
  return {
    renderSchooldetails: (id) => {
      dispatch(getSchooldetails(id))
      // dispatch(getSchooldetails(schoolid))
    }
  }
}

const Schooldetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolDetails)

export default Schooldetail
