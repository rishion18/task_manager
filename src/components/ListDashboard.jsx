import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import { taskChecker } from "../store/EventReducer";

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('access_token');
    const storedRefreshToken = localStorage.getItem('refresh_token');

  }, []); 

  const dispatch = useDispatch();

  const { tasks } = useSelector(state => state.Events);

  const filteredTodo = tasks?.filter(item => item.taskList === 'todo');
  const filteredProgress = tasks?.filter(item => item.taskList === 'progress');
  const filteredCompleted = tasks?.filter(item => item.taskList === 'completed');

  useEffect(() => {
    // function to check if any task has all subTasks completed
    dispatch(taskChecker());
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between gap-4 m-10">
        <div className="w-1/3 h-screen border-r border-gray-500 flex flex-col items-center">
          <div className="flex justify-center items-center">
            <p className="m-5 self-center">To-Do List</p>
          </div>
          {filteredTodo?.map(item => <TaskCard key={item.id} item={item} />)}
        </div>
        <div className="w-1/3 h-screen border-r border-gray-500 flex flex-col items-center">
          <div className="flex justify-center items-center">
            <p className="m-5 self-center">In-Progress</p>
          </div>
          {filteredProgress?.map(item => <TaskCard key={item.id} item={item} />)}
        </div>
        <div className="w-1/3 h-screen ">
          <div className="flex justify-center items-center">
            <p className="m-5 self-center">Completed</p>
          </div>
          <div>
            {filteredCompleted?.map(item => <TaskCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
