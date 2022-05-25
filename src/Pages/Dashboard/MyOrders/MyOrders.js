import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import OrderDetails from "../../../Components/MyOrder/OrderDetails";

import auth from "../../../Firebase/firebase.init";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    isError,
    refetch,
  } = useQuery("order", async () => {
    const res = await request({ url: `/myOrders/${user?.email}` });
    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  Title("My Order");
  // console.log(orders);
  const cancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Order!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await request({
          url: `/order/${id}`,
          method: "put",
          data: { payment: "cancel" },
        });
        toast.success("Order Successfully cancel");
        refetch();
        return res.data;
      }
    });
  };
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="text-center mb-10 font-bold md:text-4xl text-2xl uppercase">
          Manage All User
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Product ID</th>
                <th>Pre Unit Price</th>
                <th>Quantity</th>
                <th>Total </th>
                <th>Payment </th>
                <th>Cancel </th>
              </tr>
            </thead>
            <tbody>
              {[...orders]?.reverse()?.map((order, index) => (
                <OrderDetails
                  order={order}
                  key={order._id}
                  index={index}
                  cancelOrder={cancelOrder}
                ></OrderDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
