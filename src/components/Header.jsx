import Logo from "./icons/Logo";
import Menu from "./icons/Menu";

export default function Header() {
  return (
    <header className="container py-8 mx-auto w-[90%] justify-between flex items-center">
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="md:flex hidden items-center gap-4">
          <li>
            <a href="">features</a>
          </li>
          <li>
            <a href="">pricing</a>
          </li>
          <li>
            <a href="">resources</a>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden items-center gap-12">
        <div>a</div>
        <div>b</div>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </header>
  );
}
