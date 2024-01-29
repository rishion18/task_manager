import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTask, moveToAnotherList } from '../store/EventReducer';

const TaskCard = ({ item }) => {

 const navigate = useNavigate();

 const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTaskClick = () => {
    navigate('/addSubTasks', { state: { item } });
  }

  const handleMoveTo = (e , value) => {
     e.preventDefault();
     dispatch(moveToAnotherList({
      sourceId: item.id,
      destinationName: value
     }));
     setToggle(false);
  }

  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
  }

  return (
    <div className="relative w-3/4 ">
      <div className="flex justify-between items-center gap-5 border border-solid mt-2 relative">
        <p onClick={handleTaskClick} className="m-3">{item.taskName}</p>
        <div className='flex gap-2'>
          <div onClick={handleDeleteTask} className='m-3'>
          <FontAwesomeIcon icon={faTrash} />
          </div>
          <div onClick={handleToggle} className='m-3'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      </div>
      <div
        className={`${
          (toggle && (item.taskList !== 'completed'))
            ? 'absolute top-full bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 right-0'
            : 'hidden'
        }`}
        id="dropdown"
      >
        <div class="px-4 py-3">
          <span class="block text-sm font-medium text-gray-900 truncate">Move to </span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
          <li>
            <a 
            onClick={(e) => {handleMoveTo(e , item.taskList === 'todo' ? 'progress' : 'todo')}} 
            href="#" data-value={item.taskList === 'todo' ? 'progress' : 'todo'} 
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
            {item.taskList === 'todo' ? 'in-progress' : 'todo'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
