import { Noto_Serif } from 'next/font/google';
import React from 'react';
const font = Noto_Serif({ subsets: ['latin'] });

export default function Case_Studies() {
  return (
    <div
      name="cases"
      className={`${font.className} flex min-h-screen flex-col items-center justify-center gap-12 bg-[#F2EADE] px-16 py-40 text-[#0C203B] lg:items-start`}
    >
      <div className="w-[60vw] md:w-[70vw] lg:ml-36 lg:w-[60vw] xl:ml-48 2xl:w-[45vw]">
        <p className="mb-5">CASE STUDIES</p>
        <h1 className="text-4xl leading-snug lg:text-6xl">
          Victory highlights featuring major wins & success stories
        </h1>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-12">
        <div className="flex flex-col lg:w-[25vw]">
          <p className="mb-3 text-sm italic">Intellectual Property Law</p>
          <h1 className="mb-5 text-xl">
            The 2022 Hessington Oil Bribery Defense
          </h1>
          <div className="flex flex-col gap-5 text-sm">
            <h1>
              <span className="mr-1 font-semibold italic">Background:</span> The
              firm was retained by Hessington Oil, which faced allegations of
              violating the Foreign Corrupt Practices Act (FCPA) due to
              purported bribes paid to foreign officials to secure an oil
              pipeline deal.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic">Challenge:</span> The
              defense required meticulous navigation of the FCPA regulations,
              comprehensive discovery to counteract the prosecution`s evidence,
              and strategic motions to dismiss fraudulent claims.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic"> Outcome:</span>{' '}
              Successfully achieved a dismissal of all charges, demonstrating
              the firm`s adeptness in managing complex international compliance
              issues and safeguarding corporate clients against severe
              penalties.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:w-[25vw]">
          <p className="mb-3 text-sm italic">Corporate Law</p>
          <h1 className="mb-5 text-xl">
            The 2023 Gillis Industries Hostile Takeover Defense
          </h1>
          <div className="flex flex-col gap-5 text-sm">
            <h1>
              <span className="mr-1 font-semibold italic">Background:</span>{' '}
              Gillis Industries was targeted for a hostile takeover by a
              predatory investor seeking to dismantle the company for profit.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic">Challenge:</span> The
              defense strategy involved drafting and implementing a poison pill,
              securing white knight investors, and litigating to block the
              takeover under breach of fiduciary duty and anti-takeover
              statutes.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic"> Outcome:</span> The
              takeover bid was successfully nullified, protecting the client`s
              corporate structure and shareholder interests. This case
              underscored the firm`s proficiency in corporate defense mechanisms
              and complex merger and acquisition (M&A) litigation. penalties.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:w-[25vw]">
          <p className="mb-3 text-sm italic">Securities Law</p>
          <h1 className="mb-5 text-xl">
            The 2024 S.E.C. Investigation Exoneration
          </h1>
          <div className="flex flex-col gap-5 text-sm">
            <h1>
              <span className="mr-1 font-semibold italic">Background:</span> The
              firm was subject to a Securities and Exchange Commission (SEC)
              investigation, facing accusations of collusion and securities
              fraud related to insider trading and stock price manipulation.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic">Challenge:</span>{' '}
              Required comprehensive internal audits, expert testimonies on
              securities regulations, and vigorous cross-examination to
              undermine the SEC`s allegations.
            </h1>
            <h1>
              <span className="mr-1 font-semibold italic"> Outcome:</span>{' '}
              Successfully exonerated the firm of all charges, effectively
              employing legal strategies that highlighted procedural errors and
              lack of substantive evidence. This victory demonstrated the firm`s
              expertise in navigating regulatory investigations and defending
              against securities litigation.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
