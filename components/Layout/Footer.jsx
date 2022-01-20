/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-brown">
      <div className="max-w-6xl mx-auto py-12 flex justify-between items-center">
        <img src="/images/logo.png" alt="logo" className="h-16 object-cover" />
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
