import React from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

const Comment = ({ message }) => {
  return (
    <div className="comment">
      <p>{message}</p>
    </div>
  )
}

Comment.propTypes = { message: PropTypes.string }

export default Comment
