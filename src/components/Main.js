
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/Main.css';
import { addTask, editTask, loadTasks } from '../Reducer/sliceauth';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { title, description };

    if (editIndex !== null) {
      dispatch(editTask({ index: editIndex, updatedTask: newTask }));
      setEditIndex(null);
    } else {
      dispatch(addTask(newTask));
    }

    setTitle('');
    setDescription('');
    alert(editIndex !== null ? 'Task edited' : 'Task added');
  };

  const handleEdit = (index) => {
    const task = tasks[index];
    setTitle(task.title);
    setDescription(task.description);
    setEditIndex(index);
  };

  const handleNavigate = () =>{
    navigate("/product")
  }

  return (
    <div className="container">
      <button onClick={handleNavigate} > Move to Tast 2</button>
      <div className="create">
        <h1 className="heading">Task Management App</h1>
        <h3 className="heading-1">Create Task</h3>

        <form onSubmit={handleSubmit}>
          <label className="label">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title"
              required
            />
          </label>
          <label className="label">
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="description"
              required
            />
          </label>
          <button type="submit" className="btn">
            {editIndex !== null ? 'Save Changes' : 'Create Task'}
          </button>
        </form>
      </div>
      <h2 className="task-heading">Tasks</h2>
      <div className="task-list">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <strong>{task.title}</strong>
                <br />
                {task.description}
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default Main;

