import React, { useState } from 'react'
import axios from 'axios'
import CommentsInput from './CommentsInput'

const LivreContenair = () => {
  const [state, setState] = useState()

  return (
    <div>
      <CommentsInput />
    </div>
    )
}

export default LivreContenair