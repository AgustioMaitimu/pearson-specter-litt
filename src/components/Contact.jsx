import { Noto_Serif } from 'next/font/google';
import React from 'react';

const font = Noto_Serif({ subsets: ['latin'] });

export default function Contact() {
  return (
    <div
      name="contact"
      className={`${font.className} flex flex-col gap-20 bg-[#0C203B] px-7 pb-4 pt-40 text-white`}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-around">
        <div id="about" className="flex flex-col gap-6 md:w-[60vw] lg:w-[30vw]">
          <p className="text-xs font-semibold">CONTACT</p>
          <h1 className="text-3xl">Pearson Specter Litt</h1>
          <div className="text-xl">
            <a
              href="https://maps.app.goo.gl/McTWCXgKrGhyHHLx7"
              className="underline-offset-4 hover:underline"
            >
              601 E 54th St, New York City, New York, 10000, USA
            </a>
            <h1>Direct Line (012) 345-6789 Available 24/7</h1>
          </div>
          <p className="text-sm">
            For expert legal counsel and strategic solutions customized to your
            specific needs, trust Pearson Specter Litt. Specializing in
            corporate law, mergers and acquisitions, securities litigation, and
            regulatory compliance, we deliver unparalleled clarity and
            confidence at every juncture. Reach out to us for a consultation and
            experience the assurance of having a premier legal team dedicated to
            your success.
          </p>
          <div id="socials"></div>
        </div>
        <div id="form" className="flex flex-col gap-6 md:w-full lg:w-[45vw]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label for="fname" className="text-sm">
                  First Name{' '}
                  <span className="text-xs text-gray-300">(required)</span>
                </label>
                <input
                  className="p-2 text-sm text-black"
                  type="text"
                  id="fname"
                  name="fname"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label for="lname" className="text-sm">
                  Last Name{' '}
                  <span className="text-xs text-gray-300">(required)</span>
                </label>
                <input
                  className="p-2 text-sm text-black"
                  type="text"
                  id="lname"
                  name="lname"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label for="email" className="text-sm">
                  Email{' '}
                  <span className="text-xs text-gray-300">(required)</span>
                </label>
                <input
                  className="p-2 text-sm text-black"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 md:w-[48%]">
                <label for="phone" className="text-sm">
                  Phone Number{' '}
                  <span className="text-xs text-gray-300">(required)</span>
                </label>
                <input
                  className="p-2 text-sm text-black"
                  type="text"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">
              <label for="message" className="text-sm">
                Message{' '}
              </label>
              <textarea
                id="message"
                rows="8"
                name="message"
                className="mt-1 w-full p-2 text-sm text-black"
              />
            </div>
            <button className="w-fit bg-[#876343] px-7 py-2 text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className="flex w-full items-center justify-between text-sm"
      >
        <h1 className="cursor-pointer">Privacy Policy</h1>
        <h1 className="cursor-pointer">Terms & Conditions</h1>
      </div>
    </div>
  );
}
