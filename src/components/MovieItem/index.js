// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          <img src={thumbnailUrl} alt="thumbnail" className="thumb-style" />
        </button>
      }
    >
      {close => (
        <div className="trigger-container">
          <button
            type="button"
            className="trigger-button close-btn"
            onClick={() => close()}
          >
            <IoMdClose size={20} />
          </button>
          <div className="player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
