import "./sideMenu.scss";
import LightButton from "@/assets/header/lightButton.svg";

export default function SideMenu() {
  return (
    <div className="dn lap-db box-auto">
      <div className="sideMenu">
        <button className="icon-button">
          <LightButton />
        </button>
        <a href="/resume/resume.pdf" className="button b2m" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
