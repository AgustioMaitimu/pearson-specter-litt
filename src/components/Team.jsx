import { Noto_Serif } from 'next/font/google';
import Image from 'next/legacy/image';
import React from 'react';
const font = Noto_Serif({ subsets: ['latin'] });

export default function Team() {
  return (
    <div
      name="team"
      className={`${font.className} z-40 flex min-h-screen flex-col items-center gap-20 bg-[#876343] py-40 font-medium text-white lg:items-start`}
    >
      <div className="w-[60vw] lg:ml-36 lg:w-[50vw]">
        <p className="mb-5 font-semibold">PEOPLE</p>
        <h1 className="text-4xl leading-snug lg:text-6xl">
          Unparalleled expertise at your service
        </h1>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-16 px-10 md:flex-row xl:gap-20 2xl:px-[10vw]">
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/pearson.jpeg"
              alt="jessica pearson"
            />
          </div>
          <h1 className="text-2xl font-bold">Pearson, Jessica</h1>
          <h2>Managing Partner</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/specter.jpeg"
              alt="harvey specter"
            />
          </div>
          <h1 className="text-2xl font-bold">Specter, Harvey</h1>
          <h2>Senior Partner</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/litt.jpeg"
              alt="louis litt"
            />
          </div>
          <h1 className="text-2xl font-bold">Litt, Louis</h1>
          <h2>Senior Partner</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/paulsen.jpg"
              alt="donna paulsen"
            />
          </div>
          <h1 className="text-2xl font-bold">Paulsen, Donna</h1>
          <h2>Chief Operating Officer</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/ross.jpeg"
              alt="mike ross"
            />
          </div>
          <h1 className="text-2xl font-bold">Ross, Mike</h1>
          <h2>Junior Partner</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/zane.jpeg"
              alt="rachel zane"
            />
          </div>
          <h1 className="text-2xl font-bold">Zane, Rachel</h1>
          <h2>Associate</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/bennett.jpeg"
              alt="katrina bennett"
            />
          </div>
          <h1 className="text-2xl font-bold">Bennett, Katrina</h1>
          <h2>Associate</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative aspect-4/5 w-56 border-[3px] border-white">
            <Image
              layout="fill"
              className="object-cover"
              priority
              src="/bodinski.jpg"
              alt="gretchen bodinski"
            />
          </div>
          <h1 className="text-2xl font-bold">Bodinski, Gretchen</h1>
          <h2>Legal Secretary</h2>
        </div>
      </div>
    </div>
  );
}
