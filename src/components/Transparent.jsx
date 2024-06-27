import { Noto_Serif } from 'next/font/google';
import React from 'react';
const font = Noto_Serif({ subsets: ['latin'] });

function Transparent() {
  return (
    <div
      className={`${font.className} z-40 flex h-screen w-screen items-center justify-center bg-transparent px-14 md:px-32 lg:justify-end lg:px-[9vw]`}
    >
      <div className="flex flex-col gap-6 border-l-[1px] border-l-[#876343] px-8 italic text-[#876343] lg:w-[34rem]">
        <h1 className="text-xl lg:text-[27px]">
          The people’s will, constitutionally expressed, is the ultimate law for
          all.
        </h1>
        <p>—Abraham Lincoln</p>
      </div>
    </div>
  );
}

export default Transparent;
