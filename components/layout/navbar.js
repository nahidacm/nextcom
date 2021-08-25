import React, { useState } from "react";
import categoryData from '../../data/categoryData';
import Link from 'next/link';

export default function navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <>
      <div className="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-white relative md:shadow-sm md:mb-10">
        <a href="/">
          <span className="sr-only">microcom.dev</span>
          <img
            className="h-8"
            src="/microCom-logo.png"
            alt="microcom.dev Logo"
            title="microcom.dev Logo"
          />
        </a>
        <button
          className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <nav
          className={`absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 visible ${
            mobileMenuVisible ? "hidden" : ""
          } md:flex`}
        >
          {
            categoryData.map((category, index)=>(category.type === 'grocery') ? 
            <Link href={`/c/${category.slug}`} key={index}>
              <a>{category.name}</a>
            </Link> : '')
          }
        </nav>
      </div>
    </>
  );
}
