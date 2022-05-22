import React from "react";
import Contract from "./Contract/Contract";

const Portfolio = () => {
  return (
    <>
      <div className="md:w-[980px] w-[95%] mx-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center my-10">
          Portfolio
        </h2>
        <div className="md:grid grid-cols-1 md:grid-cols-3 my-10 shadow-lg ">
          <div className="col-span-3 ... md:bg-blue-300 bg-primary h-[220px] flex flex-col-reverse md:flex-row md:justify-between items-center">
            <div className="md:ml-16 py-5 text-center md:text-left">
              <h2 className="md:text-5xl text-3xl font-bold">Prokash Pul</h2>
              <h3 className="md:text-3xl font-semibold text-2xl">
                Frontend Developer
              </h3>
            </div>
            <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]  relative md:mb-[-210px] md:mr-[70px] shadow-lg p-1 bg-accent">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/b10qTRS/prokash.jpg"
                alt="prokash"
              />
            </div>
          </div>
          <div className="md:col-span-2 ... h-[500px] p-5">
            <div className=" block md:hidden">
              <Contract></Contract>
            </div>
            <div>
              <h2 className="md:text-4xl text-2xl font-bold mt-5 uppercase">
                OBJECTIVE
              </h2>
              <div className="divider bg-primary md:bg-blue-300 h-1   md:w-[200px]"></div>
              <p>
                I want to be part of an organization where I can use and develop
                my knowledge and talents for the development of both the
                organization and myself
              </p>
            </div>
            <div>
              <h2 className="md:text-4xl text-2xl font-bold mt-5 uppercase">
                SKILLS
              </h2>
              <div className="divider bg-primary md:bg-blue-300 h-1   md:w-[200px]"></div>
              <ul>
                <li className="flex gap-3 items-start ">
                  <span className="font-extrabold">Expertise:</span> ReactJs,
                  Javascript(ES6), Tailwind CSS, Bootstrap, Responsive design,
                  NodeJs, ExpressJs, Firebase.
                </li>
                <li className="flex gap-3 items-start ">
                  <span className="font-extrabold">Familiar:</span> MongoDB,
                  Figma,Python,Django,wordpress, Heroku, Netlify .
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-extrabold">Tools:</span> VsCode, Git,
                  ChromeDevToo ,Netlify ,MongoDB, Figma , Postman
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 ... bg-primary md:pt-32 p-5 hidden md:block">
            <Contract></Contract>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
