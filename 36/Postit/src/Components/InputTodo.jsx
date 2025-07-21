import { useEffect, useRef } from 'react'

function InputTodo ({ handleNewInput, refNota }) {

  return (
    <input
      ref={refNota}
      type='text'
      id='todoInput'
      placeholder='Scrivi una nota e premi invio...'
      onKeyUp={handleNewInput}
    />
  )
}

export default InputTodo
