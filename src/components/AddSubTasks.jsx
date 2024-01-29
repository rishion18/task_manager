import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addSubTask } from "../store/EventReducer";
import { useState } from "react";
import SubTaskCard from "./subTaskCard";
import { v4 as uuidv4 } from 'uuid';


const AddSubTasks = () => {

  const location = useLocation();
  const item = location.state.item;

//action.payload = item.id
const dispatch = useDispatch();

const[subTaskFormData , setSubTaskFormData] = useState({
  subTaskName:'',
  subTaskDesc:'',
  isCompleted: false,
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSubTaskFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleAddSubTask = () => {
const uuidKey = uuidv4();
const formDataWithId = {
  ...subTaskFormData , id: uuidKey
}
  dispatch(addSubTask({
    id: item.id,
    subTask: formDataWithId
  }))
  alert('subtask Added');
}


const{tasks} = useSelector(state => state.Events);

const selectedTask = tasks?.filter((task) => task.id === item.id);
console.log(selectedTask)

  return(
    <div className="flex gap-3 flex-wrap justify-around">
      <div className=" m-10 flex flex-col justify-center items-center">
         {
          selectedTask[0].subTasks?.map((subtask => <SubTaskCard subtask={subtask} taskId={item.id} />))
         }
      </div>
      <div className=" m-10 flex justify-center items-center">
      <form 
            className='space-y-6'
            action="#" 
            method="POST">
              <div>
                <p>You are adding task to {item.taskName} task</p>
                <label htmlFor="subTaskName" className="block text-sm font-medium leading-6 text-gray-900 m-5">
                  sub-task Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => handleInputChange(e)}
                    id="subTaskName"
                    name="subTaskName"
                    type="subTaskName"
                    autoComplete="subTaskName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="subTaskDesc" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => handleInputChange(e)}
                    id="subTaskDesc"
                    name="subTaskDesc"
                    type="subTaskDesc"
                    autoComplete="subTaskDesc"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                 onClick={handleAddSubTask}
                 type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Add sub Task
                </button>
              </div>
            </form>
      </div>
    </div>
  )
}

export default AddSubTasks;