import React from 'react'
import { Image_tdh } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[350px] lgl:w-[650px] lgl:h-[480px] z-10 ml-12 mt-10"
        src={Image_tdh}
        alt="Image_tdh"
      />
    </div>
  );
}

export default RightBanner;
