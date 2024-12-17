import "./work.scss";
import Link from "next/link";
import Image from "next/image";
import { workContext } from "@/context/context";
import SectionHeader from "@/components/elements/SectionHeader";
import LinkIcon from "@/assets/work/link.svg";

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <SectionHeader
          title="Work"
          subtitle="Some of the noteworthy projects I have built:"
        />
      </div>
      <div className="container">
        <div className="item shadow">
          <div className="row">
            <div className="box-lap-6">
              <div className="item-picture">
                <Image
                  className="shadow"
                  loading="lazy"
                  src={workContext.mabel.image}
                  alt="mabel group"
                  width={616}
                  height={406}
                  unoptimized
                />
              </div>
            </div>
            <div className="box-lap-6">
              <div className="item-content">
                <div className="title subb">{workContext.mabel.title}</div>
                <div className="subtitle b2">{workContext.mabel.content}</div>
                <div className="items">
                  <div className="tag">Html</div>
                  <div className="tag">Css</div>
                  <div className="tag">Javascript</div>
                  <div className="tag">React</div>
                  <div className="tag">Next</div>
                  <div className="tag">Firebase</div>
                  <div className="tag">Email JS</div>
                  <div className="tag">React Map</div>
                  <div className="tag">React Sonner</div>
                  <div className="tag">Figma</div>
                </div>
                <div className="link">
                  <Link
                    href="https://www.mabelnetwork.com"
                    aria-label="mabel network"
                    target="_blank"
                  >
                    <div className="icon-button">
                      <LinkIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item shadow">
          <div className="row">
            <div className="order-1 order-lap-2 box-lap-6">
              <div className="item-picture">
                <Image
                  className="shadow"
                  loading="lazy"
                  src={workContext.ekmar.image}
                  alt="ekmar gorup"
                  width={616}
                  height={355}
                  unoptimized
                />
              </div>
            </div>
            <div className="order-2 order-lap-1 box-lap-6">
              <div className="item-content">
                <div className="title subb">{workContext.ekmar.title}</div>
                <div className="subtitle b2">{workContext.ekmar.content}</div>
                <div className="items">
                  <div className="tag">Html</div>
                  <div className="tag">Css</div>
                  <div className="tag">Javascript</div>
                  <div className="tag">React</div>
                  <div className="tag">Next</div>
                  <div className="tag">Email JS</div>
                  <div className="tag">React Sonner</div>
                  <div className="tag">Figma</div>
                </div>
                <div className="link">
                  <Link
                    href="https://www.ekmargroup.com/"
                    aria-label="ekmar group"
                    target="_blank"
                  >
                    <div className="icon-button">
                      <LinkIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item shadow">
          <div className="row">
            <div className="box-lap-6">
              <div className="item-picture">
                <Image
                  className="shadow"
                  loading="lazy"
                  src={workContext.apple.image}
                  alt="apple gaming"
                  width={616}
                  height={435}
                  unoptimized
                />
              </div>
            </div>
            <div className="box-lap-6">
              <div className="item-content">
                <div className="title subb">{workContext.apple.title}</div>
                <div className="subtitle b2">{workContext.apple.content}</div>
                <div className="items">
                  <div className="tag">Html</div>
                  <div className="tag">Css</div>
                  <div className="tag">Javascript</div>
                  <div className="tag">Figma</div>
                </div>
                <div className="link">
                  <Link
                    href="https://cenkberry.github.io/AppleGame/"
                    aria-label="apple gaming"
                    target="_blank"
                  >
                    <div className="icon-button">
                      <LinkIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
