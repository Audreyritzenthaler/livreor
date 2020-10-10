import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

import './GetComments.css'

const GetComments = ({ allMessages }) => {
  return (
    <div className="commentsList">
      {allMessages
        ? allMessages.map((message, i) => (
            <Comment key={i} message={message.message} />
          ))
        : 'Loading messages !'}
    </div>
  )
}

GetComments.propTypes = { allMessages: PropTypes.array }

export default GetComments
