import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "I'm a Product Manager",
      "And I run marathons />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden bg-white">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[40%] w-[140%] h-[500px] bg-[#F7AB0A]/10 -skew-y-12 transform -translate-x-1/4" />
      </div>

      <BackgroundCircles />
      <div className="relative z-10 h-24 w-24 mx-auto">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Me"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
    </div>
  );
}
