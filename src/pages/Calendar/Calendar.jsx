
import React from 'react'
import AddTodo from '../../componests/addTodo/addTodo'
import Todos from '../../componests/addTodo/Todos'

const TodoPage = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default TodoPage
