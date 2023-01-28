import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTask.trim() === ''){
      setError('Geef een taak in!');
    }else{
      setTasks([...tasks, newTask]);
      setNewTask('');
      setError('');
    }
  }

  const handleRemove = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="my-4">
        <input 
          type="text" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <br/>
        <button className="bg-blue-500 text-white p-2 rounded-lg ml-10">Voeg taak toe</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-none">
        {tasks.map((task, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded-lg mb-2">
            {task}
            <button className="bg-red-500 text-white p-1 rounded-lg ml-2" onClick={() => handleRemove(index)}>Verwijder</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;