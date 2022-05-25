import React from "react";

const OrderDetails = (order, index, orderShipped) => {
  const {
    productId,
    price,
    image,
    quantity,
    totalPrice,
    payment,
    shipped,
    productName,
    _id,
  } = order.order;
  return (
    <>
      <tr>
        <td>{order.index + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={
                    image ? image : "https://i.ibb.co/7jMg9Xq/circled-user.pngg"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{productName?.slice(0, 10)}..</td>
        <td className="">{productId?.slice(0, 10)}...</td>
        <td className="">${price}</td>
        <td className="">{quantity}</td>
        <td className="">${totalPrice}</td>

        <td>
          {payment === "cancel" && <p className="text-red-500">Cancel</p>}
          {payment === "paid" && <p className="text-green-500">Paid</p>}

          {payment === "unpaid" && <p className="text-red-500">Unpaid</p>}
        </td>
        <td>
          {shipped === "shipped" ? (
            <p className="text-green-500">Shipped</p>
          ) : (
            <button
              disabled={payment === "cancel" || payment === "unpaid"}
              onClick={() => order.orderShipped(_id)}
              className="btn bg-red-500 btn-xs text-accent"
            >
              Shipping
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderDetails;
