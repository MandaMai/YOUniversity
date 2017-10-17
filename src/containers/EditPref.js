// container
import { connect } from 'react-redux'
import { putUser } from '../actions/editpref'
import EditPreferences from '../components/editpreferences/EditPreferences'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (userData) => {
            dispatch(putUser(userData))
        }
    }
}

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPreferences)

export default EditPref
