import React from "react";
import Button from "./common/Button";

export default function LinkBoost() {
  return (
    <>
      <div className="capitalized flex-col gap-4 text-white bg-primary-violet bg-boost-desktop flex justify-center items-center p-14">
        <div>
          <h1 className="text-white capitalize text-3xl text-center font-semibold">
            boost your links today
          </h1>
        </div>

        <div>
          <Button rounded variant="primary">
            get started
          </Button>
        </div>
      </div>
    </>
  );
}
