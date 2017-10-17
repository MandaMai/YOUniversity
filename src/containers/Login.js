// container
import { connect } from 'react-redux'
import { putLogin } from '../actions/login'
import Landing from '../components/landing/Landing'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userData) => {
            console.log("Userdata being sent: " + userData)
            dispatch(putLogin(userData))
        }
    }
}

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)

export default User
