import React from "react";

export default function Card({ icon: Icon, title: Title }) {
  return (
    <>
      <div className=" justify-center second:mt-10   ">
        <div className=" container mx-auto relative max-w-sm w-full bg-white shadow-md p-8 rounded-lg">
          <div className="absolute  -top-10 left-1/2 transform -translate-x-1/2  md:left-4 md:top-[-32px] md:transform-none bg-primary-violet p-4 rounded-full">
            {<Icon />}
          </div>

          <div className="mt-10">
            <h1 className="text-xl font-semibold text-gray-800"> {Title}</h1>
            <p className=" container mx-auto mt-2 text-gray-400 capitalize">
              Boost your recognition with each click. Generic links do not mean
              a thing. Branded links help instill confidence in your content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
