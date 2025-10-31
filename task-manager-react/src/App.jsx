import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import './App.css'

// Icon Imports
import menuIcon from './assets/menu_icon.png';
import searchIcon from './assets/search_icon.png';
import checkIcon from './assets/check_icon.png';
import inboxIcon from './assets/inbox_icon.png';
import calendarIcon from './assets/calendar_icon.png';
import upcomingIcon from './assets/upcoming_icon.png';

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    if (!text) return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask])
  };
  
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id 
        ? {...task, completed: !task.completed} :
         task
      ));
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return task.completed === false;
    if (filter === 'completed') return task.completed === true;
  })
  
  return (
    <div className='app'>
      <header className="site-header">
        <div className="left-group">
          <img src={menuIcon} alt="Menu Icon"/>
          <label className="search-bar">
            <img src={searchIcon} alt="Search Icon"/>
            <input
              type="text"
              placeholder="Quick Find"
            />
          </label>
        </div>
        <div className="right-group">
          <img src={checkIcon} alt="Check Icon"/>
          <TaskCounter tasks={tasks}/>
        </div>
      </header>

      <main className="site-main">
        <aside className="sidebar">
          <ul>
            <li>
              <img src={inboxIcon} alt="Inbox Icon"/>
              <p>Inbox</p>
              <p className="count">5</p>
            </li>
            <li>
              <img src={calendarIcon} alt="Calendar Icon"/>
              <p>Today</p>
              <p className="count">5</p>
            </li>
            <li>
              <img src={upcomingIcon} alt="Upcoming Icon"/>
              <p>Upcoming</p>
            </li>
          </ul>
        </aside>

        <section className="site-content">
          <h1>Inbox</h1>
          <section className="filters">
            <button onClick={() => setFilter('all')} className={filter ==='all' ? 'active' : ''}>
              All
            </button>
            <button onClick={() => setFilter('active')} className={filter ==='active' ? 'active' : ''}>
              Active
            </button>
            <button onClick={() => setFilter('completed')} className={filter ==='completed' ? 'active' : ''}>
              Completed
            </button>
          </section>

          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />

          <TaskForm onAddTask={addTask} />
        </section>
      </main>
    </div>
  );
}

export default App