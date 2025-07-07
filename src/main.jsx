import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Now pure CSS

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Cta from "./components/Cta/Cta";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import LatestJobs from "./components/LatestJobs/LatestJobs";
import PageNotFount from "./components/PageNotFount/PageNotFount";

// Smooth scrolling with Lenis
import Lenis from "lenis";

const lenis = new Lenis();

// Continuously update the scroll using requestAnimationFrame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Main section with all homepage components
export const MainLayout = () => (
  <>
    <Home />
    <Brands />
    <Categories />
    <Cta />
    <FeaturedJobs />
    <LatestJobs />
  </>
);

// React Router Setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainLayout />} />
      <Route path="*" element={<PageNotFount />} />
    </Route>
  )
);

// Render the root component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
