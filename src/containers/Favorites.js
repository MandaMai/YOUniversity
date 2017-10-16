import { connect } from 'react-redux'
import { getFavorites } from '../actions/favorite'
import { Favorites } from '../components/favorites/Favorites'

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderFavorites: () => {
      dispatch(getFavorites())
    }
  }
}

const FavoritesItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites)

export default FavoritesItems