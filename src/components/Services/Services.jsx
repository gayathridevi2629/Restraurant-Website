import React from "react";
import Img1 from "../../assets/briyani/biryani2.png";
import Img2 from "../../assets/briyani/biryani2.png";
import Img3 from "../../assets/briyani/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: " Mutton Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Meat Rice ",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img3,
    name: "Ambur Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10 dark:bg-gray-800 dark:text-white">
        <div data-aos="slide-up" data-aos-duration="400" className="container ">
          {/* top section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold"> Services </h1>
            <p className="text-xs text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, ut? Iium praesentium error molerunt quaerat illum
              dolorum minima sed earum! Nesciunt, sed!
            </p>
          </div>

          {/* card section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5
          md:grid-cols-3 md:gap-5 place-items-center  gap-14"
          >
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                  key={id}
                  className=" max-w-[300px] group
                 rounded-2xl bg-white dark:bg-gray-700 dark:hover:bg-primary 
                 hover:text-white duration-300 p-4 hover:bg-primary dark:text-white
                 "
                >
                  <div className="h-[100px] ">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] mx-auto block transform 
                    -translate-y-14 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  <div className="mt-4 ">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-700 line-clamp-2 mt-3">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
