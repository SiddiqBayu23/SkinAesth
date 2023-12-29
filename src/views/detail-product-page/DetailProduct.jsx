import React, { useEffect, useState } from "react";
import DetailProductView from "./DetailProductView";
import { getProductById, getProducts, getProductsImg } from "../../services/productsAPI";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [recommended, setRecommended] = useState([]);
    const [like, setLike] = useState([]);
    const [tab, setTab] = useState('details');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetailProduct = async () => {
            const result = await getProductById(id);
            const imageUrl = await getProductsImg(result.product_img);

            const formattedDescription = result.product_details.replace(/\\n/g, '\n');
            const formattedApply = result.product_apply.replace(/\\n/g, '\n');

            setProduct({ ...result, imageUrl, product_details: formattedDescription, product_apply: formattedApply });
        };

        const fetchRecommendedProducts = async () => {
            let result = await getProducts();
            result = result.sort(() => Math.random() - 0.5);
            result = result.slice(0, 4);
        
            const productsWithImage = await Promise.all(result.map(async product => {
                const imageUrl = await getProductsImg(product.product_img);
                return { ...product, imageUrl };
            }));
        
            setRecommended(productsWithImage);
        }

        const fetchLikeProducts = async () => {
            let result = await getProducts();
            result = result.sort(() => Math.random() - 0.5);
            result = result.slice(0, 4);
        
            const productsWithImage = await Promise.all(result.map(async product => {
                const imageUrl = await getProductsImg(product.product_img);
                return { ...product, imageUrl };
            }));
        
            setLike(productsWithImage);
        }

        fetchRecommendedProducts();
        fetchLikeProducts();
        fetchDetailProduct();
    }, [id]);

    const handleSetTab = (tab) => {
        setTab(tab);
    }

    const handleNavigateDetail = (id) => {
        navigate(`/detail-product/${id}`);
    };

    return <DetailProductView
        product={product}
        recommended={recommended}
        like={like}
        tab={tab}
        handleSetTab={handleSetTab}
        handleNavigateDetail={handleNavigateDetail}
    />;
};

export default DetailProduct;