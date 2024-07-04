import React from "react";
import AppPic from "../../assets/app_store.png";
import PlayPic from "../../assets/play_store.png";
import MobileBike from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-600 py-14">
      <div
        data-aos="slide-up"
        data-aos-duration="400"
        className="container mx-auto px-4  max-w-5xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 ">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              className="text-2xl text-center sm:text-left  font-semibold 
             dark:text-gray-400 text-gray-700"
            >
              Foodly Available for Android and IOS
            </h1>

            <div
              className="flex flex-wrap justify-center 
            sm:items-start"
            >
              <a href="#">
                <img
                  src={PlayPic}
                  alt="Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppPic}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>

          <div>
            <img
              src={MobileBike}
              alt="Mobile Bike"
              className="max-w-[300px] mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
