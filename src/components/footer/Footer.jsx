"use client";
import "./footer.scss";
import React, { useState } from 'react';
import Link from "next/link";
import SectionHeader from "@/components/elements/SectionHeader";
import MailIcon from "@/assets/footer/mail.svg";
import CopyIcon from "@/assets/footer/copy.svg";
import CheckIcon from "@/assets/footer/check.svg";
import Github from "@/assets/hero/github.svg";
import Twitter from "@/assets/hero/twitter.svg";
import Instagram from "@/assets/hero/insta.svg";

export default function Footer() {
  const [ copied , setCopied ] = useState(false);

  function handleCopy() {
    var copyMailAddress = document.getElementById("mailAddress").innerHTML;
    navigator.clipboard.writeText(copyMailAddress);
    setCopied(true);
  }

  return (
    <section className="footer dark-bg">
      <div className="container">
        <div className="row">
          <div className="offset-lap-3 box-lap-6">
            <SectionHeader
              title="Get in touch"
              subtitle="What is next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
            />
            <div className="mail">
              <MailIcon />
              <div id="mailAddress" className="h3">
                cenkberi@gmail.com
              </div>
              <button className="copyMail" onClick={handleCopy}>
                <CopyIcon />
                {copied ? <CheckIcon className="checkIcon" /> : null}
              </button>
            </div>
            <div className="title b2">
              You may also find me on these platforms!
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
      </div>
    </section>
  );
}
