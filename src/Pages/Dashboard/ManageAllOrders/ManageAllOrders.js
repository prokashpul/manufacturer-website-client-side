import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import OrderDetails from "../../../Components/ManageAllOrders/OrderDetails/OrderDetails";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const ManageAllOrders = () => {
  Title("Manage All Orders");
  const { data, isLoading, isError, refetch } = useQuery("order", async () => {
    const res = await request({ url: `/all-orders` });
    return res?.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  const orderShipped = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Shipped Order!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await request({
          url: `/order/${id}`,
          method: "put",
          data: { shipped: "shipped" },
        });
        toast.success("Order Successfully Shipped");
        refetch();
        return res?.data;
      }
    });
  };

  return (
    <div>
      Manage All Orders {data?.length}
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
                {[...data]?.reverse()?.map((order, index) => (
                  <OrderDetails
                    order={order}
                    key={order?._id}
                    index={index}
                    orderShipped={orderShipped}
                  ></OrderDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default ManageAllOrders;
