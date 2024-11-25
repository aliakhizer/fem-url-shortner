import React from "react";
import Button from "./common/Button";

export default function ShorterLink() {
  return (
    <>
      <div className="container w-[90%] rounded px-8 py-12 mx-auto bg-boost-desktop bg-primary-violet  flex gap-4 flex-col md:flex-row justify-center items-center  ">
        <input
          type="text"
          className="p-2 w-full rounded  "
          placeholder="Enter your link here..."
        />

        <div className="w-full md:w-1/5 ">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </>
  );
}
