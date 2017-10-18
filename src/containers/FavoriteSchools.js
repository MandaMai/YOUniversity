import { connect } from 'react-redux'
import { addFavorite } from '../actions/favoriteSchool'
// import { Favorites } from '../components/favorites/Favorites'

const mapStateToProps = state => {
  return {
    favoriteSchools: state.favoriteSchools
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderFavoriteSchools: () => {
      dispatch(setFavorites())
    }
  }
}

const FavoriteSchoolItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteSchools)

export default FavoriteSchoolItems

// // container
// import { connect } from 'react-redux'
// import { postUser } from '../actions/user'
// import NewUser from '../components/newuser/NewUser'

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         createUser: (userData) => {
//             dispatch(postUser(userData))
//         }
//     }
// }

// const User = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(NewUser)

// export default User