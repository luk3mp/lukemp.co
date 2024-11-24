import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { BlogPost } from "../../typings";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  blogPost: BlogPost;
};

// Custom renderers for Portable Text
const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="relative w-full h-64 my-5">
        <Image
          src={urlFor(value).url()}
          alt="Blog post content image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-5 my-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-5 my-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold my-5">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold my-5">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 my-5 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-relaxed my-4">{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-200 p-1 rounded-md text-sm">{children}</code>
    ),
  },
};

const BlogPostPage = ({ blogPost }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-grow max-w-4xl mx-auto p-5"
      >
        <h1 className="text-5xl font-bold text-center mb-10">
          {blogPost.title}
        </h1>
        <p className="text-gray-400 text-center mb-10">
          {new Date(blogPost.publishedAt).toDateString()} by {blogPost.author}
        </p>
        {blogPost.mainImage && (
          <div className="relative w-full h-80 mb-10">
            <Image
              src={urlFor(blogPost.mainImage).url()}
              alt={blogPost.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="prose prose-lg mx-auto">
          {/* Render Portable Text with Custom Components */}
          <PortableText value={blogPost.content} components={components} />
        </div>
      </motion.article>
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "blogPost"]{ slug }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: BlogPost) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = groq`
    *[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "author": author->name,
      content
    }
  `;

  const blogPost = await sanityClient.fetch(query, { slug: params?.slug });

  return {
    props: {
      blogPost,
    },
    revalidate: 60,
  };
};

export default BlogPostPage;
