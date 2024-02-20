import "./App.css";

import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FindAccountPage from "./pages/FindAccountPage";
import ErrorPage from "./pages/ErrorPage";
import UserProfilePage from "./pages/UserProfilePage";
import NewSchedulePage from "./pages/NewSchedulePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
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
      {
        path: "user",
        element: <UserProfilePage />,
      },
      {
        path: "new",
        element: <NewSchedulePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
