import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import SideMenu from "./sideMenu/SideMenu";
import MobileMenu from "./mobileMenu/MobileMenu";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row aic">
          <Logo />
          <Menu />
          <SideMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}