import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand & Description */}
        <div className="space-y-4 text-left">
          <img
            src="/logo-lmp.svg"
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <p className="text-gray-400 text-sm">
            Showcasing my work, projects, and blogs.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <nav className="space-y-2">
            <Link href="/#projects" legacyBehavior>
              <a className="block text-gray-400 hover:text-white">Projects</a>
            </Link>
            <Link href="/resume" legacyBehavior>
              <a className="block text-gray-400 hover:text-white">Resume</a>
            </Link>
            <Link href="/posts" legacyBehavior>
              <a className="block text-gray-400 hover:text-white">Blog</a>
            </Link>
          </nav>
        </div>

        {/* Column 3: Social Icons & Contact */}
        <div className="space-y-4 text-right">
          <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
          <a
            href="https://x.com/luk3mp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end text-gray-400 hover:text-white"
          >
            <img
              src="/x-social-media-white-icon.svg"
              alt="X"
              className="h-6 w-6 mr-2"
            />
            luk3mp
          </a>
          <a
            href="https://github.com/luk3mp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end text-gray-400 hover:text-white"
          >
            <img
              src="/github-white-icon.svg"
              alt="GitHub"
              className="h-6 w-6 mr-2"
            />
            luk3mp
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className="flex justify-center my-6">
        <div className="w-[60%] border-t border-gray-600"></div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Luke's Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
