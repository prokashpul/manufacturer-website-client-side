import ManageAllOrders from "../Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";

export const PrivetRoutes = [
  { path: "/dashboard/my-profile", name: "My Profile", Component: MyProfile },
  { path: "/dashboard", name: "My Profile", Component: MyProfile },
  { path: "/dashboard/my-order", name: "My Orders", Component: MyOrders },
  {
    path: "/dashboard/manage-all-orders",
    name: "Manage All Orders",
    Component: ManageAllOrders,
  },
];
