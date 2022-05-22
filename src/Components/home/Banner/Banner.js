import React from "react";
import Slider from "react-slick/lib/slider";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="h-[85vh] overflow-hidden bg-gray-200">
      <Slider {...settings}>
        <div className="h-[75vh] ">
          <div className="grid grid-cols-2 items-center lg:w-[1080px] w-[95%] mx-auto md:p-10 p-4">
            <div className="md:p-5">
              <h3 className="font-bold text-primary text-2xl md:text-5xl ">
                <span className="text-secondary">Hundreds </span>
                Professional Tools
              </h3>
              <p className="my-5">
                Electricians will use an electric drill to help them install new
                lighting fixtures or disassemble installed hardware to access
                wiring and other electrical components.
              </p>
              <button className="btn btn-primary my-5">Explore Now</button>
            </div>
            <div className="md:block hidden">
              {" "}
              <img
                className="w-full"
                src="https://i.ibb.co/Y7Z1Qc4/product-5-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-[75vh] ">
          <div className="grid grid-cols-2 items-center max-w-[1080px] w-[95%] mx-auto md:p-10 p-4">
            <div className="md:p-5">
              <h3 className="font-bold text-primary  md:text-5xl ">
                <span className="text-secondary">Big choice of</span> Plumbing
                products
              </h3>
              <p className="my-5">
                Electricians will use an electric drill to help them install new
                lighting fixtures or disassemble installed hardware to access
                wiring and other electrical components.
              </p>
              <button className="btn btn-primary my-5">Explore Now</button>
            </div>
            <div className="md:block hidden">
              <img
                className="w-full hidden md:block"
                src="https://i.ibb.co/5Ltd0pq/product-7-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-[75vh] ">
          <div className="grid grid-cols-2 items-center max-w-[1080px] w-[95%] mx-auto md:p-10 p-4">
            <div className="md:p-5">
              <h3 className="font-bold text-primary text-2xl md:text-5xl ">
                <span className="text-secondary">Screwdrivers </span>
                Professional Tools
              </h3>
              <p className="my-5">
                Electricians will use an electric drill to help them install new
                lighting fixtures or disassemble installed hardware to access
                wiring and other electrical components.{" "}
              </p>
              <button className="btn btn-primary my-5">Explore Now</button>
            </div>
            <div className="md:block hidden">
              {" "}
              <img
                className="w-full hidden md:block"
                src="https://i.ibb.co/km7Y1gp/product-3-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
