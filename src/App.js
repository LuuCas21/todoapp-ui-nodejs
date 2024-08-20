import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS
import FormTask from './components/FormTask';
import TaskGallery from './components/TaskGallery';

const App =() => {
  const [task, setTask] = useState([]);

  const apikey = process.env.REACT_APP_API_URL;

  const todoAPI = async () => {
    const { data } = await axios.get(apikey);
    setTask(data.task);
  };

  // FETCHING API
  useEffect(() => {
    todoAPI();
  }, []);

  return (
    <div className="wrapper">
      <FormTask todoAPI={todoAPI}/>
      <TaskGallery task={task} todoAPI={todoAPI}/>
    </div>
  );
}

export default App;
