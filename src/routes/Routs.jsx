import { createBrowserRouter  } from "react-router-dom";
import App from "../layouts/App";
import HomePage from "../pages/Home/Home/Home";
import ShopPage from "../pages/Shop/Shop";
import TeamPage from "../pages/Team/Team";
import ProjectsPage from "../pages/Projects/Projects";
import CalenderPage from "../pages/Calendar/Calendar";
import DashBoardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/shop',
            element: <ShopPage />
        },
        {
            path: '/team',
            element: <TeamPage />
        },
        {
            path: '/projects',
            element: <ProjectsPage />
        },
        {
            path: '/calendar',
            element: <CalenderPage />
        },
      ]

    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />
            }
        ]
    }
  ]);

  export default router;