import BlogImg from "../../public/hero/blog.jpg";

const Blog = () => {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
        {/* Image */}
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
          <img
            src={BlogImg}
            width={480}
            height={400}
            alt="Blog Image"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300 relative z-10"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 pr-12 z-10">
          <h2 className="nunito text-4xl font-bold leading-tight mb-6">
            Stay Updated with Our Blog
          </h2>
          <p className="nunito text-l text-gray-600 mb-8">
            Discover the latest trends, tips, and insights in the tech world.
            Our blog is your go-to resource for staying informed and inspired.
          </p>
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-950 transition duration-300">
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
