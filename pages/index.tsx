import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { PageInfo, Experience, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-white text-gray-800 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200 scrollbar-thumb-gray-400">
      <Head>
        <title>Luke&apos;s Portfolio</title>
      </Head>

      <Header />

      {/* Snapping Sections */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* <section id="workexperience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}

      {/* <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section> */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* <section id="contact" className="snap-start">
        <ContactMe />
      </section> */}

      {/* Footer Section */}
      <section id="footer" className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      experiences,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
