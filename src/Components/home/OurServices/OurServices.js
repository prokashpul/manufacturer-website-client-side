import React from "react";
import {
  HiTruck,
  HiPhoneIncoming,
  HiOutlineKey,
  HiOutlineTag,
} from "react-icons/hi";
const OurServices = () => {
  return (
    <div className="overflow-hidden border">
      <div className="stats shadow w-full">
        <div className="stat flex justify-center items-center">
          <div className="text-5xl text-primary">
            <HiTruck />
          </div>
          <div>
            <div className="text-3xl font-semibold text-secondary">
              Free Shipping
            </div>
            <div className="stat-desc">For orders from 1000 pis</div>
          </div>
        </div>
        <div className="stat flex justify-center items-center">
          <div className="text-5xl text-primary">
            <HiPhoneIncoming />
          </div>
          <div>
            <div className="text-3xl font-semibold text-secondary">
              Support 24/7
            </div>
            <div className="stat-desc">Call us any Time</div>
          </div>
        </div>
        <div className="stat flex justify-center items-center">
          <div className="text-5xl text-primary">
            <HiOutlineKey />
          </div>
          <div>
            <div className="text-3xl font-semibold text-secondary">
              100% Safety
            </div>
            <div className="stat-desc">Only secure payments</div>
          </div>
        </div>
        <div className="stat flex justify-center items-center">
          <div className="text-5xl text-primary">
            <HiOutlineTag />
          </div>
          <div>
            <div className="text-3xl font-semibold text-secondary">
              Hot Offers
            </div>
            <div className="stat-desc">Discounts up to 90%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
