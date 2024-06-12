import React from 'react'
import { Image_tdh} from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[300px] lgl:w-[650px] lgl:h-[480px] z-10 ml-12 mt-10"
        src={Image_tdh}
        alt="Image_tdh"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner