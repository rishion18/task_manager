import { createSlice } from "@reduxjs/toolkit";

const EventReducerSlice = createSlice({
    name: 'EventReducerSlice',
    initialState: {
      tasks: [],
    },
    reducers: {
      setTasks: (state, action) => {
        const newTasks = [...state.tasks, action.payload];
        state.tasks = newTasks;
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      },

      addSubTask: (state, action) => {
        const { id, subTask } = action.payload;
      
        const updatedTasks = state.tasks.map((item) => {
          if (id === item.id) {
            return {
              ...item,
              subTasks: [...item.subTasks, subTask],
            };
          }
          return item;
        });
      
        state.tasks = updatedTasks;
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      },
      

      markSubtaskCompleted: (state, action) => {
        const { subtaskId, taskId } = action.payload;
      
        const updatedTasks = state.tasks.map((item) => {
          if (taskId === item.id) {
            const updatedSubTasks = item.subTasks.map((subtask) => {
              if (subtaskId === subtask.id) {
                return {
                  ...subtask,
                  isCompleted: true,
                };
              }
              return subtask;
            });
      
            return {
              ...item,
              subTasks: updatedSubTasks,
            };
          }
          return item;
        });
      
        state.tasks = updatedTasks;
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      },
      

    taskChecker: (state) => {

      const allTasks = localStorage.getItem('tasks');
      if(allTasks !== undefined){
        state.tasks = JSON.parse(allTasks);
      }

       state.tasks = state.tasks?.map(task => {
        if (task.taskList === 'todo' || task.taskList === 'progress') {
          if (task.subTasks && task.subTasks.length > 0) {
            let allSubtasksCompleted = task.subTasks.every(subtask => subtask.isCompleted);
    
            if (allSubtasksCompleted) {
              return {
                ...task,
                taskList: 'completed'
              };
            }
          }
        }
        return task;
      });
      localStorage.setItem('tasks' , JSON.stringify(state.tasks));
    },

    moveToAnotherList: (state, action) => {
      // sourceId and destinationName in action.payload
      const { sourceId, destinationName } = action.payload;
    
      const updatedTasks = state.tasks?.map((task) => {
        if (task.id === sourceId) {
          return {
            ...task,
            taskList: destinationName,
          };
        }
        return task;
      });
    
      state.tasks = updatedTasks;
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    },
    

    deleteTask: (state, action) => {
      const taskId = action.payload;

      if (state.tasks) {
        const newTasks = state.tasks.filter((task) => task.id !== taskId);
        state.tasks = newTasks;
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      }
    },
    
     
    }
})

export const {
              setTasks , 
              addSubTask , 
              markSubtaskCompleted , 
              taskChecker , 
              moveToAnotherList,
              deleteTask,
              setRenderTasks
            } = EventReducerSlice.actions;

export default EventReducerSlice.reducer;