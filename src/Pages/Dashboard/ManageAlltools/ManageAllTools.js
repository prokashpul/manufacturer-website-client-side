import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ToolsDetails from "../../../Components/ManageAllTools/ToolsDetails";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const ManageAllTools = () => {
  Title("Manage All tools");
  const {
    data: tools,
    isLoading,
    isError,
    refetch,
  } = useQuery("tools", async () => {
    const res = await request({ url: `manageTools` });

    return res?.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  const deleteTool = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove Admin!",
    }).then(async (result) => {
      if (result?.isConfirmed) {
        const res = await request({
          url: `/manageTools/delete/${id}`,
          method: "delete",
        });
        refetch();
        return res?.data;
      }
    });
  };
  //   console.log(tools);
  return (
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
              <th>Quantity</th>
              <th>price</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {[...tools]?.reverse()?.map((tool, index) => (
              <ToolsDetails
                tool={tool}
                key={tool?._id}
                index={index}
                deleteTool={deleteTool}
              ></ToolsDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllTools;
