import React from "react";
import Button from "./common/Button";

export default function Hero() {
  return (
    <section className="container pt-5 pb-10 border w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-2">
      <div className="text-center md:text-left w-1/2">
        <h1 className="font-bold text-3xl capitalize mb-3 max-w-[242px] mt-6">
          more than just shorter links
        </h1>
        <p className="text-neutral-grayishViolet mb-3 max-w-[376px]">
          build your brand recognition and get detailed insights on how your
          links are performing
        </p>
        <Button rounded variant="primary">
          Get Started
        </Button>
      </div>
      <img
        className="md:w-1/2"
        src="/images/illustration-working.svg"
        alt="girl setting on a computer desk"
      />
    </section>
  );
}
