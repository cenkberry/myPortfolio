import "./about.scss";
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
                src="/about/about.webp"
                alt="about photo"
                width={480}
                height={599}
                unoptimized
              />
            </div>
          </div>
          <div className="box-lap-6">
            <div className="about-content">
              <div className="title h3b">
                Curious about me?
              </div>
              <div className="content b2">
                Hello! I am Cenk, a frontend developer with 10 years of
                professional experience. My passion for web technologies,
                combined with my drive to create user-friendly and
                performance-oriented applications, has led me to work on
                numerous projects over the years.
              </div>
              <div className="content b2">
                I started my career with HTML, CSS, and JavaScript, building a
                solid foundation in these core technologies. Over time, I
                specialized in modern JavaScript libraries and frameworks like
                React.js and Next.js. I have been using these tools extensively
                for many years and am always adapting to the latest updates in
                the field.
              </div>
              <div className="content b2">
                For database management, I prefer using robust platforms like
                Firebase and Supabase. These tools allow me to manage secure
                data and integrate efficient backend solutions. Additionally, to
                enhance software quality and ensure reliability, I use tools
                like Jest to perform comprehensive tests on my applications.
              </div>
              <div className="content b2">
                In the design process, I actively work with tools
                like Figma, Photoshop, and Adobe XD to create intuitive and
                visually appealing interfaces.
              </div>
              <div className="content b2">
                I’ve gained experience working at top companies in my home
                country and also took an active role in global projects at an
                international firm abroad.
              </div>
              <div className="content b2">
                I’m excited about the work I do and always open to new projects!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
