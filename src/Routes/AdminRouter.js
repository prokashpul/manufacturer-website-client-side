import AddBlog from "../Pages/Dashboard/AddBolg/AddBlog";
import AddTools from "../Pages/Dashboard/AddTools/AddTools";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import ManageAllOrders from "../Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageAllTools from "../Pages/Dashboard/ManageAlltools/ManageAllTools";

export const AdminRoutes = [
  { path: "/dashboard/all-user", name: "All User", Component: AllUser },
  { path: "/dashboard/add-tools", name: "All User", Component: AddTools },
  { path: "/dashboard/add-blog", name: "All User", Component: AddBlog },
  {
    path: "/dashboard/manage-all-tools",
    name: "All User",
    Component: ManageAllTools,
  },
  {
    path: "/dashboard/manage-all-orders",
    name: "Manage All Orders",
    Component: ManageAllOrders,
  },
];
