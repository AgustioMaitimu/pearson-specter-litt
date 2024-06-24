'use client';

import { Noto_Serif, Playfair_Display } from 'next/font/google';
import React, { useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';

const font = Noto_Serif({ subsets: ['latin'] });
const logo = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  const { isScrollingDown, isScrollingUp } = useScrollDirection();

  return (
    <div className={`${font.className} fixed top-0 z-50 w-full`}>
      <div className="flex w-full flex-wrap gap-2 bg-[#0C203B] px-8 py-4 text-sm text-[#F2EADE] md:gap-1">
        <h1>♦ 601 E 54th St, New York City, New York, 10000, USA</h1>
        <h1>♦ Direct Line (012) 345-6789 ♦ Available 24/7</h1>
      </div>
      <div className="hidden w-full items-center justify-between border-b-[1px] border-gray-400 bg-[#F2EADE] px-6 py-4 text-[#0C203B] md:flex xl:px-14">
        <h1 className={`${logo.className} text-3xl font-semibold`}>PSL</h1>
        <div className="flex gap-6 text-xs font-semibold uppercase">
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">People</p>
          <p className="cursor-pointer">Portfolio</p>
          <p className="cursor-pointer">Case Studies</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
}
