import React from "react";
import {
  HiOutlineLocationMarker,
  HiPhone,
  HiMail,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { Link } from "react-router-dom";
const Contract = () => {
  return (
    <>
      <h2 className="md:text-4xl text-2xl font-bold uppercase">Contact</h2>
      <div class="divider bg-primary md:bg-blue-300 h-1"></div>
      <ul className="flex flex-col gap-2 md:gap-5">
        <li className="flex gap-3 items-start text-xl">
          <HiOutlineLocationMarker className="md:text-3xl text-xl text-secondary" />
          31 segunbagicha ,Dhaka 1000
        </li>
        <li className="flex gap-3 items-start text-xl">
          <HiPhone className="md:text-3xl text-xl text-secondary" />
          <a href="tel:01642133102">+8801642133102</a>
        </li>
        <li className="flex gap-3 items-start text-xl">
          <HiMail className="md:text-3xl text-xl text-secondary" />{" "}
          <a href="mailto:prokashpul2@gmail.com">prokashpul2@gmail.com</a>
        </li>
        <li className="flex gap-3 items-start text-xl">
          <HiOutlineGlobeAlt className="md:text-3xl text-xl text-secondary" />
          <Link to="https://github.com/prokashpul">GitHub</Link>
        </li>
        <li className="flex gap-3 items-start text-xl">
          <HiOutlineGlobeAlt className="md:text-3xl text-xl text-secondary" />
          <Link to="https://www.linkedin.com/in/prokash-pul/">LinkedIn</Link>
        </li>
      </ul>
    </>
  );
};

export default Contract;
