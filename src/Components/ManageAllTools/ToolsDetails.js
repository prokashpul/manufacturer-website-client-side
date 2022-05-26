import React from "react";

const ToolsDetails = ({ tool, index, deleteTool }) => {
  console.log(tool);
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={
                    tool?.image
                      ? tool?.image
                      : "https://i.ibb.co/7jMg9Xq/circled-user.pngg"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{tool?.name?.slice(0, 35)}..</td>
        <td className="">{tool?.quantity}</td>
        <td className="">${tool?.price}</td>
        <td>
          <button
            onClick={() => deleteTool(tool?._id)}
            className="btn btn-md bg-red-500"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ToolsDetails;
