import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";

export const PrivetRoutes = [
  { path: "/dashboard/my-order", name: "My Orders", Component: MyOrders },
  { path: "/dashboard/add-review", name: "Add Review", Component: AddReview },
];
