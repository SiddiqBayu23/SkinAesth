import React from 'react';
import { Link } from 'react-router-dom'
import HomeHeader from '/assets/images/home-header.png';
import HomeAbout from '/assets/images/home-about.png';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { truncateText } from '../../helper/truncateText';
import Carousel from 'react-bootstrap/Carousel';

const HomeView = ({ categories, best, handleNavigateDetail, blogs, handleNavigateBlog }) => (
  <div className="home">
    
    
    <main>
      {/* About Section */}
      <section className="home__about my-10 lg:my-32">
        <div className="custom-container">
          <div className="home__about__box flex flex-col lg:flex-row items-center justify-between gap-">
            <img
              src={HomeAbout}
              alt="Home About Image"
              className="home__about__image w-full lg:w-1/2 object-cover h-50 sm:h-64 md:h-72 lg:h-[643px] mb-4 lg:mb-0"
            />
            <div className="home__about__content w-full lg:w-1/2">
              <h1 className="home__about__title text-4xl lg:text-5xl font-playfair font-semibold text-pink-300 mb-4 lg:mb-8">
                About Us
              </h1>
              <p className="home__about__subtitle font-playfair font-medium text-xl mt-4 lg:mt-8">
                Selamat datang di SkinAesth!
              </p>
              <p className="home__about__description font-playfair text-md lg:text-lg my-4 lg:my-8">
                SkinAesth adalah situs yang menyediakan informasi seputar perawatan kulit dan produk skincare yang sesuai dengan jenis kulit Anda. Kami menyediakan artikel-artikel yang informatif dan terpercaya tentang cara merawat kulit Anda dengan benar, serta memberikan rekomendasi produk skincare yang tepat untuk jenis kulit Anda.
              </p>
              <Link to="./about">
              <button className="button button--primary">About</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
<section className="home__categories my-8 lg:my-32">
  <div className="custom-container">
    <div className="home__categories__box">
      <h1 className="text__heading font-playfair text-center text-pink-300 text-4xl font-semibold mb-4 lg:mb-8">Categories</h1>
      <div className="home__categories__list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 my-8 lg:my-20">
        {categories.map((category) => (
          <div className="home__categories__item p-4 lg:p-8 rounded-md border border-pink-300 flex flex-col items-center gap-4" key={category.product_category_id}>
            <img src={category.imageUrl} alt="Toner Image" className="w-16 lg:w-20" />
            <p className="font-playfair font-medium text-sm lg:text-md text-center">{category.product_category_name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Best Sellers Section */}
      <section className="home__best my-8 lg:my-32">
        <div className="custom-container">
          <div className="home__best__box">
            <h1 className="text__heading font-playfair text-center text-pink-300 text-4xl font-semibold mb-4 lg:mb-8">Best Sellers</h1>
            <div className="home__best__list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 my-8 lg:my-20">
              {best.map((product) => (
                <div className="home__best__item rounded-md border border-gray-300 overflow-hidden p-4 lg:p-8" key={product.id} onClick={() => handleNavigateDetail(product.id)}>
                  <div className="h-48 lg:h-72 overflow-hidden">
                    <img src={product.imageUrl} alt="Product Image" className="home__best__image w-full h-full object-cover" />
                  </div>
                  <div className="home__best__info flex flex-col gap-2">
                    <h2 className="home__best__name font-manrope font-semibold text-md lg:text-lg text-pink-400">{product.product_name}</h2>
                    <p className="home__best__desc font-manrope text-xs lg:text-sm">{product.product_subname}</p>
                    <p className="home__best__price text-sm lg:text-md">${product.product_price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Blog Section */}
      <section className="home__blog my-8 lg:my-32">
    <div className="custom-container">
      <div className="home__blog__box">
        <p className="text-pink-300 font-medium text-md lg:text-lg font-manrope text-center mb-2 lg:mb-4">OUR BLOG</p>
        <h1 className="text__heading font-playfair text-center text-4xl font-semibold mb-4 lg:mb-8">Latest Updates</h1>
        <div className="home__blog__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8 lg:my-20">
          {blogs.slice(0, 3).map((blog) => (
            <div className="home__blog__item rounded-md border border-gray-300 overflow-hidden" key={blog.blog_id} onClick={() => handleNavigateBlog(blog.id)}>
              <div className="h-48 lg:h-64 overflow-hidden">
                <img src={blog.imageUrl} alt="Blog Image" className="home__blog__image w-full h-full object-cover" />
              </div>
              <div className="home__blog__info flex flex-col gap-2 px-4 py-4">
                <h2 className="home__blog__title font-manrope font-semibold text-sm lg:text-md">{blog.blog_title}</h2>
                <p className="home__blog__date font-manrope text-gray-400 text-xs lg:text-sm">{blog.blog_author} | {blog.blog_created_at}</p>
                <p className="home__blog__desc text-xs lg:text-sm">{truncateText(blog.blog_details, 25)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href='/blog' className='button button--primary mx-auto block'>VIEW ALL</a>
    </div>
  </section>
    </main>
  </div>
);

export default HomeView;