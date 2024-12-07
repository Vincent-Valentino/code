import { createBrowserRouter } from 'react-router-dom'
import Home from "./home/Home"
import Auth from "./auth/Auth"
import ErrorPage from "./components/ErrorPage"
import Dashboard from "./home/dashboard/Dashboard"
import Profile from "./home/profile/Profile"
import FAQ from "./home/Faq"
import About from "./home/About"
import YourPlan from "./home/activity/YourPlan"
import OnGoing from "./home/activity/OnGoing"
import History from "./home/activity/History"
import AllCourses from "./home/course/AllCourses"
import Go from "./home/course/Go"
import Rust from "./home/course/Rust"
import Typescript from "./home/course/Typescript"
import WhatNew from "./home/WhatNew"
import Contact from "./home/Contact"
import Community from "./home/Community"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "activity",
        children: [
          { path: "plan", element: <YourPlan /> },
          { path: "ongoing", element: <OnGoing /> },
          { path: "history", element: <History /> },
        ]
      },
      {
        path: "course",
        children: [
          { path: "allcourses", element: <AllCourses /> },
          { path: "go", element: <Go /> },
          { path: "rust", element: <Rust /> },
          { path: "typescript", element: <Typescript /> },
        ]
      },
      {
        path: "whatnew",
        element: <WhatNew />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
  },
])