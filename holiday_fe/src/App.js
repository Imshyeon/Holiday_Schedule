// import logo from "./logo.svg";
import "./App.css";

import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FindAccountPage from "./pages/FindAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "schedule/:id",
        element: <DetailPage />,
      },
      { path: "article/:id", element: <DetailPage /> },
      { path: "tutorial", element: <DetailPage /> },
      {
        path: "login",
        element: <LoginPage />,
        children: [
          {
            path: "?login=detail",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "find",
        element: <FindAccountPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
