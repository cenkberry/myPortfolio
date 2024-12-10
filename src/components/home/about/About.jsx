import "./about.scss";
import { aboutContext } from "@/context/context";
import SectionHeader from "@/components/elements/SectionHeader";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about dark-bg">
      <div className="container">
        <SectionHeader title="About Me" />
        <div className="row aic">
          <div className="box-lap-6">
            <div className="about-photo">
              <Image
                loading="lazy"
                src={aboutContext.photo}
                alt="about photo"
                width={480}
                height={599}
                unoptimized
              />
            </div>
          </div>
          <div className="box-lap-6">
            <div className="about-content">
              <div className="title h3b">{aboutContext.title}</div>
              <div className="content b2">{aboutContext.content1}</div>
              <div className="content b2">
                {aboutContext.content2}
              </div>
              <div className="content b2">
                {aboutContext.content3}
              </div>
              <div className="content b2">
                {aboutContext.content4}
              </div>
              <div className="content b2">
                {aboutContext.content5}
              </div>
              <div className="content b2">
               {aboutContext.content6}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
