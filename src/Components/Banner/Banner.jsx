import React from "react";
import BannerBg from "../../assets/bg-shadow.png";
import BannerLogo from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        backgroundImage: `url(${BannerBg})`,
      }}
      className="px-2 sm:px-0 md:px-10 lg:px-3 xl:px-0 py-16  bg-cover bg-no-repeat rounded-3xl"
    >
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <img src={BannerLogo} alt="Banner Logo" />
        </div>

        <h1 className="mb-4 text-base-100 text-[40px] font-bold text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="mb-6 text-base-100 text-2xl font-light text-center">
          Beyond Boundaries Beyond Limits
        </p>

        <button className="btn py-3.5 px-5 bg-[#E7FE29] outline-2 outline-[#E7FE29] outline-offset-4 rounded-2xl font-bold shadow-none">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
