import { useEffect, useState } from "react";
import HomeView from "./HomeView"
import { getProductCategory, getProductCategoryImg } from "../../services/productCategoryAPI";
import { getProducts, getProductsImg } from "../../services/productsAPI";
import { useNavigate } from "react-router-dom";
import { getBlogImg, getBlogs } from "../../services/blogsAPI";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [best, setBest] = useState([]);
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await getProductCategory();
            const categoriesWithImages = await Promise.all(result.map(async category => {
                const imageUrl = await getProductCategoryImg(category.product_category_img);
                return { ...category, imageUrl };
            }));
            setCategories(categoriesWithImages);
        }

        const fetchBestProducts = async () => {
            let result = await getProducts();
            result = result.sort(() => Math.random() - 0.5);
            result = result.slice(0, 4);
        
            const productsWithImage = await Promise.all(result.map(async product => {
                const imageUrl = await getProductsImg(product.product_img);
                return { ...product, imageUrl };
            }));
        
            setBest(productsWithImage);
        }

        const fetchBlogs = async () => {
            let result = await getBlogs();
            result = result.slice(0, 3);
        
            const blogWithImage = await Promise.all(result.map(async blog => {
                const imageUrl = await getBlogImg(blog.blog_img);
                return { ...blog, imageUrl };
            }));
        
            setBlog(blogWithImage);
        }

        fetchCategories();
        fetchBlogs();
        fetchBestProducts();
    }, []);

    const handleNavigateDetail = (id) => {
        navigate(`/detail-product/${id}`);
    };

    const handleNavigateBlog = (id) => {
        navigate(`/detail-blog/${id}`);
    }

    return <HomeView
        categories={categories}
        best={best}
        handleNavigateDetail={handleNavigateDetail}
        handleNavigateBlog={handleNavigateBlog}
        blogs={blog}
    />;
};

export default Home;