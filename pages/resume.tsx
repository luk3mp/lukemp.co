import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchResume } from "../utils/fetchResume";

type ResumeProps = {
  resumeUrl: string;
};

const Resume = ({ resumeUrl }: ResumeProps) => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-6">
          Hey there
        </h1>
        <p className="text-gray-600 mb-8">
          You can download my full resume using the link below.
        </p>

        <a
          href={resumeUrl}
          download
          className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition duration-300"
        >
          Download Resume
        </a>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const resumeUrl = await fetchResume();

  return {
    props: {
      resumeUrl,
    },
    revalidate: 60, // Optional: Regenerate the page every 60 seconds
  };
};

export default Resume;
