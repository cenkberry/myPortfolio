import "./skills.scss";
import SectionHeader from "@/components/elements/SectionHeader";
import HtmlIcon from "@/assets/skills/html.svg";
import CssIcon from "@/assets/skills/css.svg";
import JsIcon from "@/assets/skills/js.svg";
import ReactIcon from "@/assets/skills/react.svg";
import NextIcon from "@/assets/skills/next.svg";
import TsIcon from "@/assets/skills/ts.svg";
import JestIcon from "@/assets/skills/jest.svg";
import FirebaseIcon from "@/assets/skills/firebase.svg";
import SassIcon from "@/assets/skills/sass.svg";
import BsIcon from "@/assets/skills/bs.svg";
import TwIcon from "@/assets/skills/tailwind.svg";
import GitIcon from "@/assets/skills/git.svg";
import FigmaIcon from "@/assets/skills/figma.svg";
import PsIcon from "@/assets/skills/ps.svg";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader
          title="Skills"
          subtitle="The skills, tools and technologies I am really good at:"
        />
        <div className="items">
          <div className="item">
            <HtmlIcon />
            <div>Html5</div>
          </div>
          <div className="item">
            <CssIcon />
            <div className="b1">Css3</div>
          </div>
          <div className="item">
            <SassIcon />
            <div className="b1">Sass</div>
          </div>
          <div className="item">
            <JsIcon />
            <div className="b1">Javascript</div>
          </div>
          <div className="item">
            <ReactIcon />
            <div className="b1">React.js</div>
          </div>
          <div className="item">
            <NextIcon />
            <div className="b1">Next.js</div>
          </div>
          <div className="item">
            <TsIcon />
            <div className="b1">Typescript</div>
          </div>
          <div className="item">
            <JestIcon />
            <div className="b1">Jest</div>
          </div>
          <div className="item">
            <FirebaseIcon />
            <div className="b1">Firebase</div>
          </div>
          <div className="item">
            <BsIcon />
            <div className="b1">Bootstrap</div>
          </div>
          <div className="item">
            <TwIcon />
            <div className="b1">Tailwind</div>
          </div>
          <div className="item">
            <GitIcon />
            <div className="b1">Git</div>
          </div>
          <div className="item">
            <FigmaIcon />
            <div className="b1">Figma</div>
          </div>
          <div className="item">
            <PsIcon />
            <div className="b1">Photoshop</div>
          </div>
        </div>
      </div>
    </section>
  );
}
