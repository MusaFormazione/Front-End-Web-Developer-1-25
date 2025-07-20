function InputTodo({ handleNewInput }) {

  return <input
      type="text"
      id="todoInput"
      placeholder="Scrivi una nota e premi invio..."
      onKeyUp={handleNewInput} />
}

export default InputTodo
