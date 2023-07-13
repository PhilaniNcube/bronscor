/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-brown">
      <div className="flex items-center justify-between max-w-6xl py-12 mx-auto">
        <img src="/images/bronscor_logo.png" alt="logo" className="object-cover w-52" />
        <div className="flex flex-wrap">
          <p className="text-sm">
            COPYRIGHT © {new Date().getFullYear()} BRONSCOR | WEBSITE DESIGNED
            BY YELLOW LIZARD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
