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
  const imgUrl = "https://i.ibb.co/7jMg9Xq/circled-user.png";
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
              class="btn btn-primary btn-xs drawer-button lg:hidden"
            >
              Dashboard
            </label>
          )}
          {user && (
            <div class="flex-none lg:hidden">
              <div class="dropdown dropdown-hover dropdown-end">
                <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img
                      src={`${user?.photoURL ? user?.photoURL : imgUrl}`}
                      alt={`${user?.displayName}`}
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  class="bg-accent menu menu-compact dropdown-content mt-2 p-2 shadow  rounded-box w-52"
                >
                  <li>
                    <NavLink
                      className="rounded-lg text-secondary"
                      to="/dashboard/my-profile"
                      class="justify-between"
                    >
                      {user?.displayName}
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="text-secondary uppercase"
                      onClick={() => handelSinOut()}
                    >
                      Sin Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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

          <div class="flex-none hidden lg:block uppercase">
            <ul class="menu gap-3 text-accent menu-horizontal">
              <li>
                <NavLink className="rounded-lg text-accent" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg text-accent" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg text-accent" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg text-accent" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              {user ? (
                <>
                  <li>
                    <button onClick={() => handelSinOut()}>Sin Out</button>
                  </li>

                  <div class="flex-none">
                    <div class="dropdown dropdown-hover dropdown-end">
                      <label
                        tabIndex="0"
                        class="btn btn-ghost btn-circle avatar"
                      >
                        <div class="w-10 rounded-full">
                          <img
                            src={`${user?.photoURL ? user?.photoURL : imgUrl}`}
                            alt={`${user?.displayName}`}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex="0"
                        class="bg-secondary menu menu-compact dropdown-content mt-2 p-2 shadow  rounded-box w-52"
                      >
                        <li>
                          <NavLink
                            className="rounded-lg text-accent"
                            to="/dashboard/my-profile"
                            class="justify-between"
                          >
                            {user?.displayName}
                          </NavLink>
                        </li>
                        <li>
                          <button
                            className="uppercase"
                            onClick={() => handelSinOut()}
                          >
                            Sin Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li>
                    <NavLink className="rounded-lg text-accent" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="rounded-lg text-accent" to="/sin-up">
                      Sin up
                    </NavLink>
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
        <ul class="menu gap-3 p-4 overflow-y-auto w-80 bg-base-100 ">
          {/* <!-- Sidebar content here --> */}

          <li>
            <NavLink className="rounded-lg text-secondary" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-lg text-secondary" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-lg text-secondary" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-lg text-secondary" to="/dashboard">
              Dashboard
            </NavLink>
          </li>

          {user && (
            <li>
              <button
                className="text-secondary uppercase"
                onClick={() => handelSinOut()}
              >
                Sin Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
