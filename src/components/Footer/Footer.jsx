import React from 'react'
import Footerlo from "../../assets/food-logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-950 dark:text-white">
        <div
          data-aos="zoom-out"
          data-aos-duration="400"
          className="max-w-[1200px] mx-auto"
        >
          <div className="grid md:grid-cols-3 py-5 ">
            <div className="py-8 px-4 ">
              <h1 className="flex items-center gap-3 text-xl sm:font-3xl font-bold text-justify sm:text-left  ">
                <img src={Footerlo} alt="" className="max-w-[50px]" />
                FOODIE
              </h1>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                temporibus adipisci numquam vel esse fuga. Ea reiciendis dolor
                ipsam perferendis.
              </p>
              <br />
              <div className="flex items-center mb-3 gap-3">
                <FaLocationDot className="text-2xl" />
                <p>Noida , UttarPradesh</p>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <FaMobile className="text-2xl" />
                <p>+91 9789489123</p>
              </div>
              {/* social handles */}
              <div className="flex gap-3 items-center mt-6  ">
                <a href="#">
                  <FaSquareInstagram className="text-2xl" />
                </a>
                <a href="#">
                  {" "}
                  <FaFacebookSquare className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
            {/* list  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4 ">
                  <h1 className="text-xl  font-bold text-justify  sm:text-left mb-3">
                    Important Links{" "}
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4 ">
                  <h1 className="text-xl  font-bold text-justify sm:text-left mb-3">
                    Important Links{" "}
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4 ">
                  <h1 className="text-xl  font-bold text-justify sm:text-left mb-3">
                    Important Links{" "}
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className=" h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10" />

          <div className="py-3">
            <h1 className=' flex justify-around mb-3'>
              @copyright 2024 All Rights are Reserved || Made with Passion By
              Gayathri 🚀
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
// h g " " ' ' c G h H
export default Footer
