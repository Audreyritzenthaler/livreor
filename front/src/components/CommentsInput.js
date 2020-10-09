import React, { useState } from 'react'
import axios from 'axios'

import './CommentsInput.css'

const CommentsInput = () => {
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:8080/comments',
      data: {
        message
      }
    })
      .then((reponse) => {
        //On traite la suite une fois la réponse obtenue 
        console.log(reponse);
      })
      .catch((erreur) => {
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
      })

  }

  return (
    <form onSubmit={submit}>
      <textarea
        className='inputComment'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder=' Write your comment here !'
        rows="5"
        cols="33">
      </textarea>
      <button className='inputBtn'>Commenter</button>
    </form>
  )
}

export default CommentsInput