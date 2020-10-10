import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import CommentsInput from './CommentsInput'
import GetComments from './GetComments'

const LivreContainer = () => {
  const [allMessages, setAllMessages] = useState()
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: '/comments',
      data: {
        message
      }
    })
      .then((response) => {
        toast.success('Bien envoyé ! Merci :)', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        addingMessage(response.data)
        setMessage('')
      })
      .catch(() => {
        if (!message.length) {
          toast.error('Pas de message :/', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        } else {
          toast.error(
            'Une erreur est survenue lors de la publication du message !',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            }
          )
        }
      })
  }

  const getAllMessages = () => {
    axios.get('/comments').then((res) => setAllMessages(res.data))
  }

  const addingMessage = (message) => {
    setAllMessages((prevAllMessages) => [...prevAllMessages, message])
  }

  useEffect(() => {
    getAllMessages()
  }, [])

  return (
    <div>
      <GetComments allMessages={allMessages} />
      <CommentsInput
        addingMessage={addingMessage}
        submit={submit}
        onChange={handleChange}
        message={message}
      />
    </div>
  )
}

export default LivreContainer
