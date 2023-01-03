// Write your code here

import MovieItem from '../MovieItem/index'

import './index.css'

const MovieSlider = props => {
  const {details} = props

  return <MovieItem details={details} />
}

export default MovieSlider
