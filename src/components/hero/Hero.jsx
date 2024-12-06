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
    <div className="hero">
      <div className="container">
        <div className="row aic">
          <div className="box-lap-7 order-2 order-lap-1">
            <div className="hero-content">
              <div className="title h1">Hi, I’m Cenk Beri 👋</div>
              <div className="subtitle b2">
                A frontend developer specializing in creating user-friendly and
                efficient web applications. I work with technologies like HTML,
                CSS, JavaScript, React, and Next.js. In my projects, I actively
                utilize Firebase, Jest, and TypeScript. I enjoy crafting clean,
                modular code and building interfaces that deliver a seamless
                user experience. I am always eager to learn and grow in my
                field.
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
                <Link href="https://github.com/cenkberry" aria-label="TGithub">
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
    </div>
  );
}
