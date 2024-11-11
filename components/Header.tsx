import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons"; // Using SocialIcon from react-social-icons

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgb(36,36,36)] p-5 flex items-center justify-between max-w-7xl mx-auto">
      {/* Left-aligned Logo */}
      <Link href="/">
        <img
          src="/logo-lmp.svg" // Replace with your logo path
          alt="Home"
          className="h-10 w-10 cursor-pointer rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </Link>

      {/* Centered Navigation Links */}
      <nav className="flex space-x-6">
        {["Home", "Projects", "Resume", "Blog"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-gray-300 hover:underline hover:font-bold transition-all duration-200 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Right-aligned Mail Icon */}
      <Link href="#contact">
        <SocialIcon
          network="email"
          className="h-8 w-8 cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
          fgColor="white"
          bgColor="transparent"
        />
      </Link>
    </header>
  );
}
