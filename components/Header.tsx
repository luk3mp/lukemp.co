import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Homepage Icon with Grayscale Hover Effect */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <Link href="/">
          <img
            src="/logo-lmp.svg" // Using your existing logo
            alt="Home"
            className="h-10 w-10 cursor-pointer rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.url}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      {/* Reach Out Button */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-white-400">
            Reach Out
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
