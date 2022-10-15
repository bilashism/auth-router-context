import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./layouts/Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }
    ],
    errorElement: <ErrorPage />
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
