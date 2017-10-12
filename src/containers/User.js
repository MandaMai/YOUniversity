import { connect } from 'react-redux'
import { postUser } from '../actions/user'
import { NewUser } from '../components/newuser/NewUser'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderUser: () => {
            dispatch(postUser("WA", "education", "7000"))
        }
    }
}

const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewUser)

export default User
