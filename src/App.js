import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import Login from "./components/Login.jsx";
import DashBoard from "./components/ListDashboard";
import NavBarLayout from "./layouts/NavBarLayout.jsx";
import AddSubTasks from "./components/AddSubTasks.jsx";



function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/Dashboard',
    element: <NavBarLayout title={'DashBoard'}><DashBoard/></NavBarLayout>
  },
  {
    path: '/addSubTasks',
    element: <NavBarLayout title={'subtasks'}><AddSubTasks/></NavBarLayout>
  }
])

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
