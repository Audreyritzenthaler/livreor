import React, { useState } from 'react'
import './CommentsInput.css'

const CommentsInput = ({ submit }) => {
  const [comment, setComment] = useState('')

  return (
    <form onSubmit={submit}>
      <textarea
        className='inputComment'
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder=' Write your comment here !'
        rows="5"
        cols="33">
      </textarea>
      <button className='inputBtn'>Commenter</button>
    </form>
  )
}

export default CommentsInput