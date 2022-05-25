import React from "react";

const OrderDetails = ({ order, index, cancelOrder }) => {
  console.log(order, "yes");
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
                    order?.image
                      ? order?.image
                      : "https://i.ibb.co/7jMg9Xq/circled-user.pngg"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{order?.productName?.slice(0, 10)}..</td>
        <td className="">{order?.productId?.slice(0, 10)}...</td>
        <td className="">${order?.price}</td>
        <td className="">{order?.quantity}</td>
        <td className="">${order?.totalPrice}</td>

        <td>
          {order.payment === "cancel" ? (
            <p className="text-red-500">Cancel order</p>
          ) : (
            <button onClick className="btn btn-primary btn-xs text-accent">
              Pay
            </button>
          )}
        </td>
        <td>
          <button
            disabled={order?.payment === "cancel"}
            onClick={() => cancelOrder(order?._id)}
            className="btn bg-red-500 btn-xs text-accent"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderDetails;
