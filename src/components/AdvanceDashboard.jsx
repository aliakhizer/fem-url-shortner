import React from "react";
import Card from "./Card";
import BrandLogo from "./icons/BrandLogo";
import IconsDetails from "./icons/IconsDetails";
import FullyCustomized from "./icons/FullyCustomized";

export default function AdvanceDashboard() {
  return (
    <>
      <div className="bg-gray-300 py-28 ">
        <div className="container mx-auto flex flex-col justify-center items-center gap-6">
          <h1 className="font-bold capitalize text-primary-violet text-3xl">
            Advance Statistics
          </h1>
          <p className="text-neutral-grayishViolet capitalized md:max-w-96 text-center">
            Track how your links are performing across the web with our advanced
            statistics.
          </p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row py-16">
          <div className="flex justify-center">
            <Card icon={BrandLogo} title="Brand Recognition" />
          </div>
          <div className="flex justify-center items-center ">
            <div className=" border-l-8 h-20 border-primary-cyan  md:border-t-8  md:h-0 md:w-6 md:mt-6 "></div>
          </div>

          <div className="flex justify-center md:mt-14">
            <Card icon={IconsDetails} title="Icons Details" />
          </div>
          <div className="flex justify-center items-center">
            <div className=" border-l-8 h-20 border-primary-cyan  md:border-t-8  md:h-0 md:w-6 md:mt-6 "></div>
          </div>

          <div className="flex justify-center  md:mt-20">
            <Card icon={FullyCustomized} title="Fully Recognition" />
          </div>
        </div>
      </div>
    </>
  );
}
