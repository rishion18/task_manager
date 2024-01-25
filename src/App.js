import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import Login from "./components/Login.jsx";
import DashBoard from "./components/ListDashboard";



function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/Dashboard',
    element:<DashBoard/>
  }
])

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
