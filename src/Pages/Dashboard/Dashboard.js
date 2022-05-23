import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Title from "../../Utilities/PathTitle/PathTitle";

const Dashboard = () => {
  Title("Dashboard");
  return (
    <div className="drawer overflow-visible drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center my-10">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-order">My Order</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-all-orders">
              Manage All Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
