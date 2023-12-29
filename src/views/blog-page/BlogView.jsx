import { truncateText } from '../../helper/truncateText';
import Blog from '/assets/images/blog.png';

const BlogView = ({ blogs, handleNavigateBlog }) => (
    <div className="blog">
    <section className="blog__header bg-pink-400">
        <div className="custom-container">
            <div className="flex flex-col gap-4 items-center my-32">
                <p className="blog__title font-manrope text-sm text-white">SHORT STORY ABOUT US</p>
                <h1 className="blog__subtitle text-4xl font-playfair font-semibold text-white">Blog</h1>
            </div>
        </div>
    </section>

    {/* Blog List Section */}
    <section className="blog__list my-40">
        <div className="custom-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div className="blog__item rounded-md border border-gray-300 overflow-hidden" key={blog.blog_id} onClick={() => handleNavigateBlog(blog.id)}>
                        <div className='h-64 overflow-hidden'>
                            <img src={blog.imageUrl} alt="Product Image" className='blog__image w-full object-cover' />
                        </div>
                        <div className='blog__info flex flex-col gap-4 px-8 py-8'>
                            <h2 className='blog__title font-manrope font-semibold text-lg'>{blog.blog_title}</h2>
                            <p className='blog__date font-manrope text-gray-400'>{blog.blog_author} | {blog.blog_created_at}</p>
                            <p className='home__blog__desc'>{truncateText(blog.blog_details, 25)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
</div>
);

export default BlogView;