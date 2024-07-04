import React from 'react'
import Food1 from "../../assets/briyani/biryani3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <>
      <div className="min-h-[500px] dark:bg-gray-800 dark:text-white">
        {" "}
        {/* tall div starts  */}
        <div   data-aos="slide-up"
              data-aos-duration="400"
            
              className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {/*ima section*/}
            <div>
              <img
                src={Food1}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-xl"
              />
            </div>
            {/*text content */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0  ">
              <h1 className="text-3xl sm:text-4xl font-bold">
                lorem istanBull worlds
              </h1>
              <p className="text-sm text-gray-500 tracking-wide  ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi iusto sequi corrupti id expedita? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Omnis, exercitationem.
              </p>

              <div className="flex gap-5 ">
                <GrSecure
                  className=" bg-purple-300 rounded-full h-16 w-16 p-3 
                  shadow-sm dark:bg-purple-600 text-4xl"
                />
                <IoFastFoodSharp
                  className=" bg-orange-300 rounded-full h-16 w-16 p-3 
                  shadow-sm dark:bg-orange-600 text-4xl"
                />
                <GiFoodTruck
                  className=" bg-green-300 rounded-full h-16 w-16 p-3 
                  shadow-sm dark:bg-green-600 text-4xl"
                />
              </div>

              <div className="pt-2 mb-5">
                <button
                  className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full font-bold text-xl 
                hover:scale-110 shadow-10 duration-200 "
                >
                  order now
                </button>
              </div>
            </div>{" "}
            {/* text content div ends  */}
          </div>{" "}
          {/* grid div ends  */}
        </div>{" "}
        {/* container div ends  */}
      </div>{" "}
      {/* tall div ends  */}
    </>
  );
}
//h g " " ' ' c G c H
export default Banner
