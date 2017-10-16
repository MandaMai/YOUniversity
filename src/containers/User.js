// container
import { connect } from 'react-redux'
import { postUser } from '../actions/user'
import NewUser from '../components/newuser/NewUser'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userData) => {
            dispatch(postUser(userData))
        }
    }
}

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewUser)

export default User
