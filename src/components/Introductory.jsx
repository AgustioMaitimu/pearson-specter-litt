/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { La_Belle_Aurore, Noto_Serif } from 'next/font/google';
import Image from 'next/legacy/image';

const font = Noto_Serif({ subsets: ['latin'] });
const signature = La_Belle_Aurore({ subsets: ['latin'], weight: '400' });

export default function Introductory() {
  return (
    <div
      name="introductory"
      className={`${font.className} text z-40 flex min-h-screen w-full flex-col items-center bg-[#F2EADE] px-6 pt-40 text-[#0C203B] lg:flex-row lg:justify-around`}
    >
      <div className="w-full lg:max-w-[45vw] 2xl:max-w-[40vw]">
        <h1 className="mb-4 font-semibold text-[#F2A14B]">— Our Commitment</h1>
        <h1 className="mb-12 text-3xl font-bold text-[#0C203B]">
          We are Pearson Specter Litt
        </h1>
        <p className="mb-4 font-medium">
          An award-winning law firm dedicated to providing top-tier legal
          services. Our firm is built on a foundation of excellence, integrity,
          and unwavering commitment to our clients. We pride ourselves on
          navigating complex legal landscapes and delivering successful outcomes
          with personalized service.
        </p>
        <p className="mb-10 font-medium">
          Thank you for considering Pearson Specter Litt. Our experienced
          professionals are here to understand your needs and provide tailored
          solutions. We look forward to the opportunity to serve you.
        </p>
        <p className={`${signature.className} text-5xl text-[#F2A14B]`}>
          Pearson
        </p>
        <h1 className="mb-2 text-2xl font-semibold text-[#0C203B]">
          Jessica Pearson
        </h1>
        <h1 className="mb-14 text-sm">Managing Partner</h1>
      </div>
      <div className="shadow-1 relative z-40 aspect-4/5 h-auto w-[60vw] xs:w-[50vw] lg:w-80 2xl:w-96">
        <Image
          priority
          alt="jessica pearson"
          layout="fill"
          className="object-cover "
          src="/pearson-1.jpeg"
        />
      </div>
    </div>
  );
}
