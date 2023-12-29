import { useEffect, useState } from "react";
import BlogView from "./BlogView";
import { getBlogImg, getBlogs } from "../../services/blogsAPI";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            let result = await getBlogs();
        
            const blogWithImage = await Promise.all(result.map(async blog => {
                const imageUrl = await getBlogImg(blog.blog_img);
                return { ...blog, imageUrl };
            }));
        
            setBlogs(blogWithImage);
        }

        fetchBlogs();
    }, []);

    const handleNavigateBlog = (id) => {
        navigate(`/detail-blog/${id}`);
    }

    return <BlogView
        blogs={blogs}
        handleNavigateBlog={handleNavigateBlog}
    />
};

export default Blog;