import React from "react";
import backgroundImage from "../images/homeBg.png";
const SectionThree = () => {
  return (
    <div className="relative">
      <img src={backgroundImage} />
      <div className="absolute top-0 w-full">
        <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto ">
          <div className="flex gap-[50px] items-center pt-32">
            <div className="w-[50%]">
              <h1 className="text-5xl font-semibold my-[24px]">How it works</h1>
              <p className="text-gray-500">
                Neque rhoncus in amet ipsum eget lacus odio. Viverra mus eu amet
                risus tempor pretium habitant et. Ut aliquam eu morbi
                ullamcorper in. Eleifend orci sed pulvinar blandit aliquam nisl
                sed libero amet. Etiam lectus sed enim eu commodo nisi. Tellus
                vehicula arcu sit egestas porttitor quis faucibus.
              </p>
            </div>

            <div className="w-[50%] flex flex-col gap-6">
              <div className="flex items-center gap-[12px]">
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db93b7a30895273916f1ff_Featured%20icon.png" />
                <div>
                  <h3 className="text-2xl font-semibold my-[12px]">
                    1. Download app
                  </h3>
                  <p className="text-gray-600">
                    Massa ultrices blandit elit blandit. Eu maecenas bibendum
                    enim sed nulla.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db93b58cd2e419abcf1a98_Featured%20icon%202.png" />
                <div>
                  <h3 className="text-2xl font-semibold my-[12px]">
                    2. Register
                  </h3>
                  <p className="text-gray-600">
                    Massa ultrices blandit elit blandit. Eu maecenas bibendum
                    enim sed nulla.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db93b6e8a2c6759d1c3493_Featured%20icon%203.png" />
                <div>
                  <h3 className="text-2xl font-semibold my-[12px]">
                    3. Connect wallet
                  </h3>
                  <p className="text-gray-600">
                    Massa ultrices blandit elit blandit. Eu maecenas bibendum
                    enim sed nulla.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db93b76f4fa51a7d51e1dc_Featured%20icon%204.png" />
                <div>
                  <h3 className="text-2xl font-semibold my-[12px]">
                    4. Start trading
                  </h3>
                  <p className="text-gray-600">
                    Massa ultrices blandit elit blandit. Eu maecenas bibendum
                    enim sed nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
