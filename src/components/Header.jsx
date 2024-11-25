import { useState } from "react";
import Button from "./common/Button";
import MobileNavigation from "./common/MobileNavigation";
import Logo from "./icons/Logo";
import Menu from "./icons/Menu";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMobileMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <header className="container relative py-8 mx-auto w-[90%] justify-between flex items-center">
      <div className="flex items-center gap-8">
        <Logo />
        <nav>
          <ul className=" md:flex font-medium capitalize text-base text-neutral-grayishViolet hidden items-center gap-4">
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
        </nav>
      </div>
      <div className="md:flex hidden items-center gap-4">
        <Button variant="ghost">log in</Button>
        <Button rounded variant="primary">
          sign up
        </Button>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" handleClick={toggleMobileMenu}>
          <Menu />
        </Button>
      </div>
      <MobileNavigation toggleMenu={toggleMenu} />
    </header>
  );
}
