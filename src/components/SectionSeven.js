import React from "react";
import backgroundImage from "../images/homeBg.png";
const SectionSeven = () => {
  return (
    <div className="relative">
      <img src={backgroundImage} />
      <div className="absolute top-0 w-full">
        <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto ">
          <div className="w-full">
            <div className="pt-[76px] flex justify-center items-center">
              <div className="text-center">
                <div className="w-full pl-[150px]">
                  <h1 className="text-5xl font-semibold my-[38px] w-[600px] ">
                    Watch our crypto trading guide for beginners
                  </h1>
                  <p className="text-gray-500 text-lg w-[700px]">
                    Neque rhoncus in amet ipsum eget lacus odio. Viverra mus eu
                    amet risus tempor pretium habitant et. Ut aliquam eu morbi
                    ullamcorper in.
                  </p>
                </div>
                <div className="my-[38px]">
                  <img
                    className="absolute "
                    src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbda95706bb747ebca6630_Contact%20Video.webp"
                  />

                  <iframe
                    className="absolute"
                    width="966"
                    height="420"
                    src="https://www.youtube.com/embed/ojdEP61l3M0?si=DG04vzvG4OmXdT_k"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  {/* <iframe
                    className="absolute"
                    width="966"
                    height="420"
                    src="https://www.youtube.com/embed/M8vDwlHigJA?si=e49JUbIoGq5ap3Lo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
