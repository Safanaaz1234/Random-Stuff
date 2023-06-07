import React from "react";
import "../css/styles.css";
function Banner(props) {
  return (
    <div
      className={`mt-8 md:flex md:mx-8 lg:mx-10 ${
        props.reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        className="w-full h-60 object-cover md:w-1/2  md:h-96 lg:h-[600px]"
        src={props.imgUrl}
        alt={props.altVal}
      />
      <div
        className={`w-full h-60 md:w-1/2 md:h-96 ${props.colorVal} lg:h-[600px] text-white px-4 py-10 md:px-10 md:py-24 lg:px-16 lg:py-60 text-xl md:text-3xl lg:text-4xl text-center`}
        style={{ fontFamily: props.fontFam }}
      >
        {props.content}
        <div className=" text-sm md:text-lg lg:text-xl font-serif p-2">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default Banner;
