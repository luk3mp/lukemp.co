import { GetStaticProps } from "next";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";
import { BlogPost, Social } from "../../typings";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { fetchSocial } from "../../utils/fetchSocials";

type Props = {
  blogPosts: BlogPost[];
  socials: Social[];
};

const BlogHomePage = ({ blogPosts, socials }: Props) => {
  return (
    <div className="bg-white text-gray-800 min-h-screen overflow-y-scroll">
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-center text-gray-600 mb-16">
          I write about Technology, Business, Fitness, Projects, and other
          Ideas.
        </p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link
              key={post._id}
              href={`/posts/${post.slug.current}`}
              className="block group"
            >
              <motion.div
                className="flex flex-col md:flex-row items-start justify-between bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {post.mainImage && (
                  <motion.img
                    src={urlFor(post.mainImage).width(400).url()}
                    alt={post.title}
                    className="h-40 w-full md:w-1/3 object-cover rounded-lg mb-5 md:mb-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                )}

                <div className="md:ml-6 flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>

                  <div className="flex items-center space-x-2 mt-3">
                    <span className="text-sm text-gray-600">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-sm text-gray-500">
                      by {post.author}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4">
                    <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category || "General"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "author": author->name,
      excerpt,
      category
    }
  `;

  const blogPosts = await sanityClient.fetch(query);
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      blogPosts,
      socials,
    },
    revalidate: 60,
  };
};

export default BlogHomePage;
