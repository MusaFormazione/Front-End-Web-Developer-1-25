import { useRef } from 'react'
import TodoList from './TodoList'
import InputTodo from './InputTodo'

function Postit ({ todoList, removeTodo, handleNewInput }) {
  const refNota = useRef(null)

  return (
    <div className='container'>
      <div className='container-inner'>
        <div className='sticky-outer'>
          <div className='sticky'>
            <div className='sticky-content'>
              <TodoList refNota={refNota}  todoList={todoList} removeTodo={removeTodo} />
              <InputTodo refNota={refNota} handleNewInput={handleNewInput} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Postit
