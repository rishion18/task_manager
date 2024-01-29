import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markSubtaskCompleted } from '../store/EventReducer';

const SubTaskCard = ({ subtask , taskId }) => {

  const dispatch = useDispatch();  


 const handleCompletedSubTask = () => {
//action.payload will have subTaskId and taskId(primary task)
  dispatch(markSubtaskCompleted({
    subtaskId: subtask.id,
    taskId:taskId
  }))

 } 

  return (
    <div className="relative min-w-80 w-80">
      <div className="flex justify-between items-center gap-5 border border-solid mt-2 relative">
        <p className="m-3">{subtask.subTaskName}</p>
        <div>
        <button 
        onClick={handleCompletedSubTask} 
        className={`${subtask.isCompleted? `bg-green-300`:'bg-white  hover:bg-green-300'}
                  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2 `}>
           {subtask.isCompleted ? 'Completed': 'mark complete'}
        </button>
        </div>
      </div>

    </div>
  );
};

export default SubTaskCard;
