import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";

export const PublicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/login", name: "Login", Component: Login },
  { path: "/sin-up", name: "Sin Up", Component: Registration },
];
