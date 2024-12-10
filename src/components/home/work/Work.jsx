import "./work.scss";
import Link from "next/link";
import Image from "next/image";
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
                  src="/work/mabel.webp"
                  alt="mabel gorup"
                  width={616}
                  height={406}
                  unoptimized
                />
              </div>
            </div>
            <div className="box-lap-6">
              <div className="item-content">
                <div className="title subb">Mabel Network</div>
                <div className="subtitle b2">
                  I developed a promotional and informational website for the
                  Mabel Coin project. The site explains key concepts of
                  Decentralized Finance (DeFi), the role of smart contracts in
                  transforming financial services, and the benefits of
                  intermediary-free finance. With clear and concise content, it
                  highlights how users can leverage DeFi without relying on
                  traditional financial institutions. The website is designed to
                  provide an engaging user experience while effectively
                  showcasing the essence of the Mabel Coin project.
                </div>
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
                  src="/work/ekmar.webp"
                  alt="ekmar gorup"
                  width={616}
                  height={355}
                  unoptimized
                />
              </div>
            </div>
            <div className="order-2 order-lap-1 box-lap-6">
              <div className="item-content">
                <div className="title subb">Ekmar Group</div>
                <div className="subtitle b2">
                  I developed an informational website for Ekmar Group,
                  highlighting its expertise in feed milling equipment. The site
                  showcases the role of specialized machinery in producing
                  high-quality animal feed, essential for agriculture and
                  farming. With a clean design and clear content, it effectively
                  presents Ekmar Groups industry knowledge and commitment to
                  quality.
                </div>
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
      </div>
    </section>
  );
}
