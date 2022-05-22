import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Title from "../../Utilities/PathTitle/PathTitle";

const Dashboard = () => {
  Title("My Dashboard");
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
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
