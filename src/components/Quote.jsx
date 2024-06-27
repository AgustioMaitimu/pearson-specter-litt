'use client';
import React, { useEffect, useRef } from 'react';

function Quote() {
  return (
    <div
      ref={quoteRef}
      className="ab-lincoln fixed top-0 z-0 min-h-screen w-full bg-[url(/back.png)]"
    ></div>
  );
}

export default Quote;
