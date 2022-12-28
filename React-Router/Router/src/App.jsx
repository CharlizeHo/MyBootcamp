import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Not Found 🐽</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
