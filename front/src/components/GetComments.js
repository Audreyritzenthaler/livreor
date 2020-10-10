import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import axios from 'axios'

import './GetComments.css'

const GetComments = () => {
  const [allMessages, setAllMessages] = useState()

  const getAllMessages = () => {
    axios
      .get('/comments')
      .then((res) => setAllMessages(res.data))
  }

  useEffect(() => {
    getAllMessages()
  }, [])

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

export default GetComments
