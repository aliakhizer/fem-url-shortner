import React from "react";
import Button from "./Button";

export default function MobileNavigation({ toggleMenu }) {
  return (
    <nav
      className={`bg-primary-violet md:hidden flex flex-col gap-6 w-full absolute top-20 rounded px-4 py-8 
    ${toggleMenu ? "block fadeInDown" : "fadeOutUp"}`}
    >
      <ul className="flex flex-col font-medium capitalize text-base text-white items-center gap-4">
        <li>
          <a
            href="#"
            className="hover:text-neutral-veryDarkViolet transition-all"
          >
            features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-neutral-veryDarkViolet transition-all"
          >
            pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-neutral-veryDarkViolet transition-all"
          >
            resources
          </a>
        </li>
      </ul>
      <hr className="" />
      <div className="flex flex-col gap-4">
        <Button variant="ghost">log in</Button>
        <Button rounded variant="primary">
          sign up
        </Button>
      </div>
    </nav>
  );
}
