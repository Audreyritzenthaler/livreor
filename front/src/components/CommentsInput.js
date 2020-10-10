import React from 'react'
import { ToastContainer } from 'react-toastify'
import PropTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.css'

import './CommentsInput.css'

const CommentsInput = ({ submit, message, onChange }) => {
  return (
    <form onSubmit={submit}>
      <textarea
        className="inputComment"
        value={message}
        onChange={onChange}
        placeholder=" Ecris moi un commentaire ! :)"
        rows="5"
        cols="33"
      ></textarea>
      <button className="inputBtn">
        Commenter <i className="far fa-paper-plane"></i>
      </button>
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

CommentsInput.propTypes = { message: PropTypes.string }
CommentsInput.propTypes = { submit: PropTypes.func }
CommentsInput.propTypes = { onChange: PropTypes.func }

export default CommentsInput
