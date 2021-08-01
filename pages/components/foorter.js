import React from "react";
import Image from "next/image";

export default function foorter() {
  return (
    <footer className="footer border-t-2 bg-gray-50 text-center py-5 mt-10">
      <a
        href="https://www.sslwireless.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className="logo">
          <Image
            src="/ssl-wireless-logo.png"
            alt="SSL Wireless Logo"
            width={100}
            height={23}
          />
        </span>
      </a>
    </footer>
  );
}
