"use client";
import "./mobileMenu.scss";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { menuLinks } from "@/context/context";
import Logo from "@/components/header/logo/Logo";
import LightButton from "@/assets/header/lightButton.svg";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    document.querySelector("body").classList.toggle("overlay-active");
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="box lap-dn">
      <div className="df aic jce">
        <Hamburger toggled={isOpen} toggle={handleClick} />
        <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
          <Logo />
          <ul>
            {menuLinks?.map((link, id) => {
              return (
                <li key={id}>
                  <Link href={link.url} className="b2m" onClick={handleClick}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mobile-buttons">
            <div className="df aic jcsb">
              <div className="b2">Switch Theme</div>
              <button>
                <LightButton />
              </button>
            </div>
            <a href="#fill" className="button b2m" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}