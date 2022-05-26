import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Title from "../../Utilities/PathTitle/PathTitle";

const Dashboard = () => {
  Title("Dashboard");
  const [admin] = useAdmin();
  return (
    <div className="drawer overflow-visible drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  my-10">
        <div className=" mx-w-[80%] mx-auto">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          {!admin && (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/my-order">My Order</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">Add Review</NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/manage-all-orders">
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-tools">Add Tools</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-user">All User</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
