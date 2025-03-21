"use client";
import "./mobileMenu.scss";
import { useState } from "react";
import { headerContext } from "@/context/context";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Logo from "@/components/header/logo/Logo";

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
            {headerContext.menu?.map((link, id) => {
              return (
                <li key={id}>
                  <Link href={link.url} className="b2m" onClick={handleClick}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="df aic jcc">
            <a href="/resume/resume.pdf" className="button b2m" download>
              {headerContext.resume}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
