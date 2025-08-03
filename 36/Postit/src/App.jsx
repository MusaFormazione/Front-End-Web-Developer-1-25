import { useState } from 'react'

import Postit from './Components/Postit'

import './App.css'

function App () {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    setTodoList(prevList => [...prevList, todo])
  }

  const removeTodo = (index) => {
    console.log('Removing todo at index:', index)
    setTodoList(prevList => prevList.filter((_, i) => i !== index))
  }

  const handleNewInput = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      addTodo(event.target.value.trim())
      event.target.value = ''
    }
  }

  return (
    <Postit
      todoList={todoList}
      addTodo={addTodo}
      removeTodo={removeTodo}
      handleNewInput={handleNewInput}
    />
  )
}

export default App
