import React from "react";
import Instagram from "./icons/Tiwwiter";
import Pinterest from "./icons/Printerest";
import Facebook from "./icons/Facebook";
import Tiwwiter from "./icons/Tiwwiter";

export default function Footer() {
  return (
    <>
      <div className="bg-neutral-veryDarkBlue text-white">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-around p-8">
          <div className="text-3xl font-bold mb-8 md:mb-0">shortly</div>

          <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="font-bold mb-3">Features</h1>
              <ul>
                <li className="hover:text-primary-cyan">Link Shorting</li>
                <li className="hover:text-primary-cyan">Brand links</li>
                <li className="hover:text-primary-cyan">Analytics</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h1 className="font-bold mb-3">Resources</h1>
              <ul>
                <li className="hover:text-primary-cyan">Blog</li>
                <li className="hover:text-primary-cyan">Developers</li>
                <li className="hover:text-primary-cyan">Support</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h1 className="font-bold mb-3">Company</h1>
              <ul>
                <li className="hover:text-primary-cyan">About</li>
                <li className="hover:text-primary-cyan">Our Team</li>
                <li className="hover:text-primary-cyan">Career</li>
                <li className="hover:text-primary-cyan">Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mb-8 md:mb-0">
            <div className="hover:text-primary-cyan">
              <Facebook />
            </div>
            <div className="hover:text-primary-cyan">
              <Instagram />
            </div>
            <div className=" hover:text-primary-cyan">
              <Tiwwiter />
            </div>
            <div className="hover:bg-primary-cyan rounded-full">
              <Pinterest />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
