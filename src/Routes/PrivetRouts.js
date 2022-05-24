import AddTools from "../Pages/Dashboard/AddTools/AddTools";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import EditProfile from "../Pages/Dashboard/EditeProfile/EditeProfile";

import ManageAllOrders from "../Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";

export const PrivetRoutes = [
  { path: "/dashboard/my-profile", name: "My Profile", Component: MyProfile },
  { path: "/dashboard", name: "My Profile", Component: MyProfile },
  { path: "/dashboard/my-order", name: "My Orders", Component: MyOrders },
  { path: "/dashboard/all-user", name: "All User", Component: AllUser },
  { path: "/dashboard/edit-profile", name: "All User", Component: EditProfile },
  { path: "/dashboard/add-tools", name: "All User", Component: AddTools },
  { path: "/dashboard/add-review", name: "Add Review", Component: AddReview },
  {
    path: "/dashboard/manage-all-orders",
    name: "Manage All Orders",
    Component: ManageAllOrders,
  },
];
