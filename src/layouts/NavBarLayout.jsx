import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../store/EventReducer';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../components/UserProfile';


const NavBarLayout = ({children , title}) => {

  const navigate = useNavigate();

    const dispatch = useDispatch();

    const[toggle , setToggle] = useState(false);

const handleAddButoon = () => {
   toggle ? setToggle(false) : setToggle(true)
}

const [formData, setFormData] = useState({
    taskList: '',
    taskName: '',
    taskDesc: '',
    subTasks:[]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    const uuidKey = uuidv4();
    const formDataWithId = {
      ...formData,
      id: uuidKey,
    };

    dispatch(setTasks(formDataWithId));
    setToggle(false);
    alert('Task Added');
  };

  const navToAllEvents = () => {
    navigate('/Dashboard');
  }


  return (
    <div className='w-screen h-screen'>
        <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
            <a href="#" className="text-xl">Task Manager</a>
            <button onClick={handleAddButoon} class="bg-slate-300 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                + Add Task
            </button>
            <button onClick={navToAllEvents}  class="bg-slate-300 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                All Events
            </button>
            <UserProfile/>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav className='flex gap-3'>

            </nav>
        </div>
        </header>
        <div>
            <form
      className={toggle ? 'space-y-6 absolute left-1/2 transform -translate-x-1/2 m-5 w-96 h-80 bg-slate-300 z-50 flex flex-col justify-center items-center' : 'hidden'}
      action="#"
      method="POST"
    >
      <div className="w-3/4">
        <label htmlFor="taskList" className="block text-sm font-medium leading-6 text-gray-900">
          Select taskList
        </label>
        <div className="mt-2">
          <select
            onChange={(e) => handleInputChange(e)}
            id="taskList"
            name="taskList"
            autoComplete="taskList"
            required
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-3/4"
          >
            <option value="" disabled selected>Select an option</option>
            <option value="todo">todo</option>
            <option value="progress">in-progress</option>
          </select>
        </div>

        <label htmlFor="taskName" className="block text-sm font-medium leading-6 text-gray-900">
          Task Name
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => handleInputChange(e)}
            id="taskName"
            name="taskName"
            type="taskName"
            autoComplete="taskName"
            required
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-3/4"
          />
        </div>
      </div>

      <div className="w-3/4">
        <div className="flex items-center justify-between">
          <label htmlFor="taskDesc" className="block text-sm font-medium leading-6 text-gray-900">
            Task Description
          </label>
        </div>
        <div className="mt-2">
          <input
            onChange={(e) => handleInputChange(e)}
            id="taskDesc"
            name="taskDesc"
            type="taskDesc"
            autoComplete="taskDesc"
            required
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-3/4"
          />
        </div>
      </div>

      <div>
        <button
          onClick={handleAddTask}
          type="button"
          className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        >
          Add Task
        </button>
      </div>
    </form>

        </div>
        {children}
    </div>
  );
};

export default NavBarLayout;
