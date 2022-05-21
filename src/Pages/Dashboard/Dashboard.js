import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center"></div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-gray-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/">Sidebar Item 1</NavLink>
          </li>
          <li>
            <NavLink to="/">Sidebar Item 2</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
