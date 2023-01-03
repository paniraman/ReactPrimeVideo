// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  function checkAction(item) {
    return item.categoryId === 'ACTION'
  }

  const resultAction = moviesList.filter(checkAction)

  function checkComedy(item) {
    return item.categoryId === 'COMEDY'
  }

  const resultComedy = moviesList.filter(checkComedy)

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img-style"
      />
      <div className="movie-container">
        <h1 className="heading">Action Movies</h1>
        <Slider {...settings}>
          {resultAction.map(item => (
            <MovieSlider key={item.id} details={item} />
          ))}
        </Slider>
      </div>
      <div className="movie-container">
        <h1 className="heading">Comedy Movies</h1>
        <Slider {...settings}>
          {resultComedy.map(item => (
            <MovieSlider key={item.id} details={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
