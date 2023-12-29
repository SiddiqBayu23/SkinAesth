import { useParams } from "react-router-dom";
import DetailBlogView from "./DetailBlogView"
import { useEffect, useState } from "react";
import { getBlogAuthorImg, getBlogById, getBlogImg } from "../../services/blogsAPI";

const DetailBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const fetchDetailBlog = async () => {
            const result = await getBlogById(id);
            const imageUrl = await getBlogImg(result.blog_img);
            const authorUrl = await getBlogAuthorImg(result.blog_author_img);

            const formattedDetails = result.blog_details.replace(/\\n/g, '\n');

            setBlog({ ...result, imageUrl, authorUrl, blog_details: formattedDetails });
        };

        fetchDetailBlog();
    }, []);

    return <DetailBlogView
        blog={blog}
    />;
};

export default DetailBlog;