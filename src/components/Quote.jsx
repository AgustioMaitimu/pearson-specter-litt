'use client';
import React, { useEffect, useRef } from 'react';

function Quote() {
  useEffect(() => {
    console.log(document.body.offsetHeight);
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    });

    console.log(quoteRef.current.style);

    quoteRef.current.style.transform = 'translate3d(0px, 100px, 0px)';
  }, []);

  const quoteRef = useRef();

  return (
    <div
      ref={quoteRef}
      className="ab-lincoln fixed top-0 z-0 min-h-screen w-full bg-[url(/back.png)]"
    ></div>
  );
}

export default Quote;
