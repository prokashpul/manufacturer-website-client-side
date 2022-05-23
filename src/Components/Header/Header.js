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
    localStorage.removeItem("token");
    navigate("/");
  };

  const imgUrl = "https://i.ibb.co/7jMg9Xq/circled-user.png";
  return (
    <div className="drawer drawer-end sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-secondary">
          <div className="flex-1 px-2 mx-2 font-bold md:text-3xl text-2xl text-accent ">
            Pro<span className="text-primary">Electronic</span>{" "}
          </div>
          {pathname.includes("dashboard") && (
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary btn-xs drawer-button lg:hidden"
            >
              Dashboard
            </label>
          )}
          {user && (
            <div className="flex-none lg:hidden">
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={`${user?.photoURL ? user?.photoURL : imgUrl}`}
                      alt={`${user?.displayName}`}
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="bg-accent menu menu-compact dropdown-content mt-2 p-2 shadow  rounded-box w-52"
                >
                  <li>
                    <NavLink
                      className="rounded-lg text-secondary"
                      to="/dashboard/my-profile"
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
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block uppercase">
            <ul className="menu gap-3 text-accent menu-horizontal">
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

                  <div className="flex-none">
                    <div className="dropdown dropdown-hover dropdown-end">
                      <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            src={`${user?.photoURL ? user?.photoURL : imgUrl}`}
                            alt={`${user?.displayName}`}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex="0"
                        className="bg-secondary menu menu-compact dropdown-content mt-2 p-2 shadow  rounded-box w-52"
                      >
                        <li>
                          <NavLink
                            className="rounded-lg text-accent"
                            to="/dashboard/my-profile"
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu gap-3 p-4 overflow-y-auto w-80 bg-base-100 ">
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
