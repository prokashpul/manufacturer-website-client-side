import React from "react";
import { useNavigate } from "react-router-dom";

const ToolsDetails = ({ tool }) => {
  const navigate = useNavigate();
  const { name, dic, image, price, minOrder, quantity, _id } = tool || {};
  const handelButton = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name.length > 30 ? name.slice(0, 30) : name}
          </h2>
          {dic.length > 100 ? <p> {dic.slice(0, 100)} ...</p> : <p> dic</p>}
          <p>Per unit price: $ {price}</p>
          <p>Stock : {quantity}</p>
          <p>Minimum Order : {minOrder}</p>
          <div className="card-actions justify-start mt-5">
            <button
              onClick={() => handelButton(_id)}
              className="btn btn-primary text-accent"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDetails;
