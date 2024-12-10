import "./experience.scss";
import SectionHeader from "@/components/elements/SectionHeader";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="experience dark-bg">
      <div className="container">
        <SectionHeader
          title="Experiences"
          subtitle="Here is a quick summary of my most recent experiences:"
        />
        <div className="items">
          <div className="item shadow">
            <div className="image">
              <Image
                loading="lazy"
                src="/experience/betson.webp"
                alt="betson firm"
                width={200}
                height={53}
                unoptimized
              />
            </div>
            <div className="work">
              <div className="title subb">Frontend Developer</div>
              <div className="firm b1">Bets10 Sportbook &#40;Malta&#41;</div>
              <div className="details">
                <div className="detail b2">
                  Html - Css - Javascript - Nextjs
                </div>
                <div className="detail b2">TypeScript - Jest</div>
                <div className="detail b2">Webpack - Firebase</div>
                <div className="detail b2">Figma Pixel Perfect Design</div>
              </div>
            </div>
            <div className="dates b2">Sep 2003 - Oct 2024</div>
          </div>
          <div className="item shadow">
            <div className="image">
              <Image
                loading="lazy"
                src="/experience/ideasoft.webp"
                alt="ideasoft firm"
                width={200}
                height={56}
                unoptimized
              />
            </div>
            <div className="work">
              <div className="title subb">Frontend Developer</div>
              <div className="firm b1">Ideasoft &#40;Turkey&#41;</div>
              <div className="details">
                <div className="detail b2">
                  Html - Css - Javascript - Nextjs - Jest
                </div>
                <div className="detail b2">Redux State Management</div>
                <div className="detail b2">Figma Pixel Perfect Design</div>
              </div>
            </div>
            <div className="dates b2">May 2002 - June 2023</div>
          </div>
          <div className="item shadow">
            <div className="image">
              <Image
                loading="lazy"
                src="/experience/karaca.webp"
                alt="karaca firm"
                width={200}
                height={55}
                unoptimized
              />
            </div>
            <div className="work">
              <div className="title subb">Frontend Developer</div>
              <div className="firm b1">Karaca Zuccaciye &#40;Turkey&#41;</div>
              <div className="details">
                <div className="detail b2">
                  Html - Css - Javascript - Nextjs - Jest
                </div>
                <div className="detail b2">Redux State Management</div>
                <div className="detail b2">Figma Pixel Perfect Design</div>
              </div>
            </div>
            <div className="dates b2">Nov 2018 - Sep 2021</div>
          </div>
          <div className="item shadow">
            <div className="image">
              <Image
                loading="lazy"
                src="/experience/itopya.webp"
                alt="itopya firm"
                width={200}
                height={46}
                unoptimized
              />
            </div>
            <div className="work">
              <div className="title subb">Frontend Developer</div>
              <div className="firm b1">Itopya Computer &#40;Turkey&#41;</div>
              <div className="details">
                <div className="detail b2">Html - Css - Javascript</div>
                <div className="detail b2">Bootstrap</div>
                <div className="detail b2">Figma Pixel Perfect Design</div>
              </div>
            </div>
            <div className="dates b2">Sep 2016 - Sep 2018</div>
          </div>
          <div className="item shadow">
            <div className="image">
              <Image
                loading="lazy"
                src="/experience/gold.webp"
                alt="gold firm"
                width={200}
                height={81}
                unoptimized
              />
            </div>
            <div className="work">
              <div className="title subb">Frontend Developer</div>
              <div className="firm b1">Gold Computer &#40;Turkey&#41;</div>
              <div className="details">
                <div className="detail b2">Html - Css - Javascript</div>
              </div>
            </div>
            <div className="dates b2">July 2011 - August 2016</div>
          </div>
        </div>
      </div>
    </section>
  );
}
