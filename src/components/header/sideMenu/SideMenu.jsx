import { headerContext } from "@/context/context";

export default function SideMenu() {
  return (
    <div className="dn lap-db box-auto">
      <a href="/resume/resume.pdf" className="button b2m" download>
        {headerContext.resume}
      </a>
    </div>
  );
}
