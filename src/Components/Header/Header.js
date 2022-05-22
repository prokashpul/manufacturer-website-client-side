import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = ({ children }) => {
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //sinOut button handel
  const handelSinOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-secondary">
          <div class="flex-1 px-2 mx-2 font-bold md:text-3xl text-2xl text-accent ">
            Pro<span className="text-primary">Electronic</span>{" "}
          </div>
          {pathname.includes("dashboard") && (
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Dashboard
            </label>
          )}
          <div class="flex-none lg:hidden">
            <label
              for="my-drawer-3"
              class="btn btn-square btn-ghost text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block ">
            <ul class="menu gap-3 text-accent menu-horizontal">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              {user ? (
                <>
                  <li>
                    <button onClick={() => handelSinOut()}>Sin Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sin-up">Sin up</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu gap-3 p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/sin-up">Sin up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
