// container
import { connect } from 'react-redux'
import { putUser } from '../actions/editpref'
import NewUser from '../components/editpreferences/EditPreferences'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userData) => {
            dispatch(putUser(userData))
        }
    }
}

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPreferences)

export default EditPref
