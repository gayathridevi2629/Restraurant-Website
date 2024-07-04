import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10 dark:bg-gray-800 dark:text-white">
        <div data-aos="slide-up" data-aos-duration="400" className="container">
          <div className="text-center mb-14 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold"> Testimonial </h1>
            <p className="text-xs text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, ut? Iium praesentium error molerunt quaerat illum
              dolorum minima sed earum! Nesciunt, sed!
            </p>
          </div>

          {/* Testimonial section of card slide */}
          <div
            data-aos="slide-up"
            data-aos-duration="400"
            className="grid grid-cols-1  max-w-[600px] mx-auto gap-6 "
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-2 ">
                    <div
                      className="flex flex-col justify-center items-center 
                    gap-4 text-center shadow-lg mx-4 rounded-xl
                     dark:bg-gray-700 bg-primary/30 relative p-4 mx-auto "
                    >
                      <img
                        src={img}
                        alt={name}
                        className="rounded-full block mx-auto -"
                      />

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 ">{text}</p>
                        <h1 className="text-xl font-bold text-center">
                          {name}
                        </h1>
                        <p
                          className="text-black/20 text-sm font-serif top-0
                      right-0 absolute"
                        >
                          ,,,
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
