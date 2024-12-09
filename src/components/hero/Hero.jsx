import "./hero.scss";
import Link from "next/link";
import Image from "next/image";
import Place from "@/assets/hero/place.svg";
import Status from "@/assets/hero/status.svg";
import Github from "@/assets/hero/github.svg";
import Twitter from "@/assets/hero/twitter.svg";
import Instagram from "@/assets/hero/insta.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row aic">
          <div className="box-lap-7 order-2 order-lap-1">
            <div className="hero-content">
              <div className="title h1">Hi, I am Cenk Beri 👋</div>
              <div className="subtitle b2">
                A frontend developer with 10 years of experience specializing in
                HTML, CSS, JavaScript, React.js, and Next.js. I have extensive
                experience with Firebase, Supabase, and testing with Jest.
                Skilled in creating user-friendly, high-performance web
                applications, I actively use design tools like Figma, Photoshop,
                and Adobe XD. I’ve contributed to global projects at an
                international firm abroad, constantly improving my technical and
                strategic approach. My goal is to build innovative, efficient,
                and visually appealing digital experiences.
              </div>
              <div className="infos">
                <div>
                  <Place />
                  <div className="b2">Istanbul, Turkey</div>
                </div>
                <div>
                  <Status />
                  <div className="b2">Available for new projects</div>
                </div>
              </div>
              <div className="social">
                <Link href="https://github.com/cenkberry" aria-label="Github">
                  <div className="icon-button">
                    <Github />
                  </div>
                </Link>
                <Link href="https://x.com/cenkberry" aria-label="Twitter">
                  <div className="icon-button">
                    <Twitter />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/cenkberry"
                  aria-label="instagram"
                >
                  <div className="icon-button">
                    <Instagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="box-lap-5 order-1 order-lap-2">
            <div className="hero-image">
              <div className="profile-photo">
                <Image
                  priority={true}
                  src="/hero/hero.webp"
                  alt=""
                  width={400}
                  height={400}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
