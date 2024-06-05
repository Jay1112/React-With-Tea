import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col items-center justify-start overflow-x-hidden overflow-y-scroll">
      <div className='max-w-[300px] md:max-w-[800px] w-full p-2 mt-4'>
        <TodoForm/>
        <TodoList />
      </div>
    </div>
  )
}

export default App;
