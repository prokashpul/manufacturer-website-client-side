import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { request } from "../../../Utilities/AxiousUtilities/AxiousUtilities";
import Loader from "../../../Utilities/Loader/Loader";
import Title from "../../../Utilities/PathTitle/PathTitle";

const AllUser = () => {
  Title("All user");

  const { data, isLoading, isError, refetch } = useQuery("data", async () => {
    const res = await request({ url: `/users` });

    return res.data;
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  //add admin
  const handelAdmin = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await request({
          url: `/user/admin/${email}`,
          method: "put",
        });

        refetch();
        return res.data;
      }
    });
  };
  //remove admin
  const removeHandel = (email) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await request({
          url: `/user/admin/remove/${email}`,
          method: "put",
        });
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
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {[...data]?.reverse()?.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={
                              user?.image
                                ? user?.image
                                : "https://i.ibb.co/7jMg9Xq/circled-user.pngg"
                            }
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <th>{user?.name}</th>
                  <th className="">{user?.email}</th>
                  <th>
                    {user?.role === "admin" ? (
                      <p className="text-primary">admin</p>
                    ) : (
                      <>
                        <button
                          onClick={() => handelAdmin(user?.email)}
                          className="btn btn-primary btn-xs text-accent"
                        >
                          Make Admin
                        </button>
                      </>
                    )}
                  </th>
                  <th>
                    <>
                      <button
                        disabled={user?.role !== "admin"}
                        onClick={() => removeHandel(user?.email)}
                        className="btn btn-primary btn-xs text-accent"
                      >
                        Delete
                      </button>
                    </>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUser;
