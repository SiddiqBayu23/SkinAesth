import { useEffect, useState, useTransition } from "react";
import CategoriesView from "./CategoriesView"
import { getProducts, getProductsImg } from "../../services/productsAPI";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState({
        category: false,
        skinCondition: false,
        price: false,
    });
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const result = await getProducts();
          const productsWithImg = await Promise.all(result.map(async product => {
            const imageUrl = await getProductsImg(product.product_img);
            return { ...product, imageUrl };
          }));
      
          const activeFilters = Object.values(filters).flat();
          if (activeFilters.length === 0) {
            setProducts(productsWithImg);
          } else {
            const filteredProducts = productsWithImg.filter(product => {
              return Object.keys(filters).every(filterType => {
                if (!filters[filterType].length) {
                  return true;
                }
                return filters[filterType].some(filterValue => {
                  switch (filterType) {
                    case 'category':
                      return product.product_category === filterValue;
                    case 'price':
                      if (filterValue === 'under100') {
                        return product.product_price < 100;
                      } else if (filterValue === 'upto100') {
                        return product.product_price > 100;
                      } else {
                        return true;
                      }
                    case 'skinCondition':
                      const productTypes = product.product_types.split(' | ');
                      return productTypes.includes(filterValue);
                    default:
                      return true;
                  }
                });
              });
            });
      
            setProducts(filteredProducts);
          }
        }
      
        fetchProducts();
        console.log(filters);
      }, [filters]);

    const handleNavigateDetail = (id) => {
        navigate(`/detail-product/${id}`);
    };

    const toggleFilter = (filterName) => {
        setShowFilters(prevState => ({
            ...prevState,
            [filterName]: !prevState[filterName]
        }));
    };

    const handleFilterChange = (event) => {
        const { checked, value, name } = event.target;
        setFilters(prevFilters => {
            const prevFilterValues = prevFilters[name] || [];
            if (checked) {
                return { ...prevFilters, [name]: [...prevFilterValues, value] };
            } else {
                return { ...prevFilters, [name]: prevFilterValues.filter(filter => filter !== value) };
            }
        });
    };

    const handleRemoveFilter = (key, value) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            newFilters[key] = newFilters[key].filter(v => v !== value);
            if (newFilters[key].length === 0) {
                delete newFilters[key];
            }
            return newFilters;
        });
    }

    return <CategoriesView
        products={products}
        handleNavigateDetail={handleNavigateDetail}
        filters={filters}
        showFilters={showFilters}
        toggleFilter={toggleFilter}
        handleFilterChange={handleFilterChange}
        handleRemoveFilter={handleRemoveFilter}
    />;
};

export default Categories;