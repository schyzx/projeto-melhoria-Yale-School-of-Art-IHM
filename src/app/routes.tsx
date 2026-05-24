/// <reference types="vite/client" />
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { Admissions } from "./pages/Admissions";
import { Exhibitions } from "./pages/Exhibitions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "academics", Component: Academics },
      { path: "admissions", Component: Admissions },
      { path: "exhibitions", Component: Exhibitions },
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});