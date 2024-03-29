import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScheduleDetailPage from "./pages/ScheduleDetailPage";
import ArticlePage from "./pages/ArticleDetail";
import TutorialPage from "./pages/TutorialPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FindAccountPage from "./pages/FindAccountPage";
import ErrorPage from "./pages/ErrorPage";
import UserProfilePage from "./pages/UserProfilePage";
import NewSchedulePage from "./pages/NewSchedulePage";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

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
        element: <ScheduleDetailPage />,
      },
      { path: "article/:id", element: <ArticlePage /> },
      { path: "tutorial", element: <TutorialPage /> },
      {
        path: "login",
        element: <LoginPage />,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
