import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import SocialIcon with SSR disabled
const SocialIcon = dynamic(
  () => import("react-social-icons").then((mod) => mod.SocialIcon),
  { ssr: false }
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur border-b border-gray-200 p-5 flex items-center justify-between w-full mx-auto">
      {/* Left-aligned Logo */}
      <Link href="/#hero">
        <img
          src="/logo-lmp.svg"
          alt="Home"
          className="h-10 w-10 cursor-pointer rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </Link>

      {/* Centered Navigation Links */}
      <nav className="flex space-x-6">
        <Link
          href="/#hero"
          className="text-gray-700 hover:text-[#F7AB0A] hover:underline transition-all duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/#projects"
          className="text-gray-700 hover:text-[#F7AB0A] hover:underline transition-all duration-200 ease-in-out"
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className="text-gray-700 hover:text-[#F7AB0A] hover:underline transition-all duration-200 ease-in-out"
        >
          Resume
        </Link>
        <Link
          href="/posts"
          className="text-gray-700 hover:text-[#F7AB0A] hover:underline transition-all duration-200 ease-in-out"
        >
          Blog
        </Link>
      </nav>

      {/* Right-aligned Mail Icon with Orange Hover Effect */}
      <Link href="#contact">
        <div className="hover:text-[#F7AB0A] transition-colors duration-300 ease-in-out">
          <SocialIcon
            network="email"
            className="h-8 w-8 cursor-pointer"
            fgColor="currentColor" // Uses the current text color, allowing hover effect
            bgColor="transparent"
          />
        </div>
      </Link>
    </header>
  );
}
