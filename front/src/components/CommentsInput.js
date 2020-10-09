import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      .then(setMessage(''))
      .then((res) => toast.success('SUCCESS', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
      .catch((erreur) => toast.error('ERROR', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  )
}

export default CommentsInput