import React from "react";

function SmallBanner(props) {
  return (
    <>
      <div
        className={`mt-8 md:flex md:mx-8 lg:mx-10 ${
          props.reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img
          className="w-full h-60 object-cover md:w-1/2 md:h-80 lg:h-[430px]"
          src={props.imgUrl}
          alt={props.altVal}
        />
        <div
          className={`w-full h-60 md:w-1/2 md:h-80 lg:h-[430px]  ${props.colorVal} text-white px-4 py-10 md:px-10 md:py-14 lg:px-16 lg:py-28 text-lg md:text-2xl lg:text-3xl text-center`}
          style={{ fontFamily: props.fontFam }}
        >
          {props.content}
          <div className=" text-xs md:text-base lg:text-lg font-serif p-1">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallBanner;
