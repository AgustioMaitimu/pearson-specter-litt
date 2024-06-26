'use client';

import { Noto_Serif, Playfair_Display } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const font = Noto_Serif({ subsets: ['latin'] });
const logo = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  const { isScrollingDown, isScrollingUp } = useScrollDirection();

  return (
    <div className={`${font.className} fixed top-0 z-50 w-full`}>
      <div className="flex w-full flex-wrap gap-2 border-b-[1px] border-gray-400 bg-[#0C203B] px-8 py-4 text-sm text-[#F2EADE] md:gap-1 md:border-b-0">
        <a
          href="https://maps.app.goo.gl/McTWCXgKrGhyHHLx7"
          className="underline-offset-4 hover:underline"
        >
          ♦ 601 E 54th St, New York City, New York, 10000, USA
        </a>
        <h1>♦ Direct Line (012) 345-6789 ♦ Available 24/7</h1>
      </div>
      <div className="hidden w-full items-center justify-between border-b-[1px] border-gray-400 bg-[#F2EADE] px-6 py-4 text-[#0C203B] md:flex xl:px-14">
        <Link
          to="introductory"
          smooth
          duration={1000}
          className={`${logo.className} cursor-pointer text-3xl font-semibold`}
        >
          PSL
        </Link>
        <div className="flex gap-6 text-xs font-semibold uppercase">
          <Link to="services" smooth duration={1000} className="cursor-pointer">
            Services
          </Link>
          <Link to="team" smooth duration={1000} className="cursor-pointer">
            People
          </Link>
          <Link to="cases" smooth duration={1000} className="cursor-pointer">
            Case Studies
          </Link>
          <Link to="contact" smooth duration={1000} className="cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
