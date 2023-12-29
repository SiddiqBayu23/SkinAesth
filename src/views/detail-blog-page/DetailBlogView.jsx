import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const DetailBlogView = ({ blog }) => (
  <div>
    {/* Blog Header */}
    <section className="blog__header bg-pink-400 h-[36rem] relative">
      <div className="custom-container">
        {/* Text Above Image */}
        <div className="flex flex-col gap-4 items-center my-16 lg:my-32">
          <p className="blog__title font-manrope text-sm text-white">
            {blog.blog_author} | {blog.blog_subtitle}
          </p>
          <h1 className="blog__subtitle text-4xl lg:text-5xl text-center font-playfair font-semibold text-white">
            {blog.blog_title}
          </h1>
        </div>
      </div>
    </section>
    {/* Blog Details */}
    <section className="flex flex-col lg:flex-row gap-8 mt-4 lg:mt-12 mb-8 lg:mb-24 custom-container">
      {/* Author Section */}
      <div className="flex-none lg:w-1/3">
        <div className="bg-pink-200 px-4 pt-4 pb-8 rounded-md border border-pink-400">
          <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-6 rounded-md">
            <div className="overflow-hidden">
              <img src={blog.authorUrl} alt="Author Image" className="w-24 lg:w-32 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <p className="font-semibold font-playfair">Author - {blog.blog_author}</p>
              <p className="text-sm font-manrope">{blog.blog_author_jobs}</p>
              <div className="px-2 py-2 bg-pink-400 text-sm text-white mt-2">
                {blog.blog_subtitle}
              </div>
            </div>
          </div>
          <p className="my-4 font-manrope text-sm lg:w-80">{blog.blog_author_about}</p>
          <div className="flex items-center gap-4">
            <p className="font-playfair font-semibold text-sm">Share us on:</p>
            <div className="flex items-center gap-2">
              <div className="p-2 border border-pink-400">
                <FaFacebook />
              </div>
              <div className="p-2 border border-pink-400">
                <FaLinkedin />
              </div>
              <div className="p-2 border border-pink-400">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Content */}
      <div className="flex-wrap lg:w-2/3">
        {blog.blog_details &&
          blog.blog_details.split("\n").map((line, index) => (
            <p key={index} className={`font-manrope ${index > 0 ? "mt-4" : ""}`}>
              {line}
            </p>
          ))}
      </div>
    </section>
  </div>
);

export default DetailBlogView;
