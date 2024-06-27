import { Noto_Serif } from 'next/font/google';
import React from 'react';
const font = Noto_Serif({ subsets: ['latin'] });

export default function Services() {
  return (
    <div
      name="services"
      className={`${font.className} z-40 flex min-h-screen w-full flex-col items-center justify-center bg-[#F2EADE] py-40 text-[#0C203B]`}
    >
      <div className="mb-14 flex w-full flex-col items-start px-12 sm:px-20 lg:items-start lg:px-48">
        <p className="mb-3 text-sm font-semibold">SERVICES</p>
        <h1 className="w-[58vw] text-4xl leading-tight sm:w-[70vw] lg:w-[60vw] lg:text-6xl lg:leading-normal 2xl:w-[44vw]">
          Empower your decisions with trusted legal expertise
        </h1>
      </div>
      <div className="flex w-full flex-col justify-between px-12 lg:flex-row lg:px-20 xl:px-32">
        <h1 className="mb-14 text-sm lg:w-[35vw] xl:w-[25vw]">
          At our firm, empowering your legal decisions with trusted expertise is
          our top priority. Our seasoned team offers personalized guidance and
          strategic solutions across various legal challenges, ensuring you
          navigate with confidence and clarity. Whether dealing with family
          issues, estate planning, property disputes, or litigation, we’re
          committed to your success and peace of mind. Trust us to be your ally,
          transforming legal complexities into clear, manageable paths forward.
        </h1>
        <div className="flex flex-row flex-wrap justify-between gap-8 lg:w-[45vw]">
          <div className=" md:w-[47%]">
            <h1 className="mb-3 text-xl lg:text-2xl">Family Law</h1>
            <p className="text-sm">
              Navigate the complexities of family dynamics with compassionate
              support and expert guidance. Whether it’s divorce, custody
              battles, or adoption processes, we’re here to empower your
              decisions and safeguard your loved ones’ futures.
            </p>
          </div>
          <div className=" md:w-[47%]">
            <h1 className="mb-3 text-xl lg:text-2xl">Wills, Trust & Probate</h1>
            <p className="text-sm">
              Secure your legacy and ensure your wishes are honored with
              comprehensive estate planning services. From drafting wills to
              establishing trusts and navigating the probate process, our
              expertise provides peace of mind for you and your heirs.
            </p>
          </div>
          <div className=" md:w-[47%]">
            <h1 className="mb-3 text-xl lg:text-2xl">Property Law</h1>
            <p className="text-sm">
              Protect your property rights and investments with our seasoned
              legal counsel. Whether you’re buying, selling, leasing, or facing
              disputes, we empower your real estate decisions with tailored
              advice and robust representation.
            </p>
          </div>
          <div className=" md:w-[47%]">
            <h1 className="mb-3 text-xl lg:text-2xl">Disputes & Claims</h1>
            <p className="text-sm">
              Resolve legal disputes with confidence and strategic acumen. Our
              experienced attorneys specialize in civil litigation, from
              personal injury claims to contract disputes, offering the support
              you need to achieve favorable outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
