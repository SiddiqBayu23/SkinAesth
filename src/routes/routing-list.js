import { lazy } from "react";
import { createElement } from "react";

export const routingList = [
    {
        label: "Home",
        element: createElement(
            lazy(async () => await import('../views/home-page/Home')),
        ),
        path: "/",
    },
    {
        label: "About",
        element: createElement(
            lazy(async () => await import('../views/about-page/About')),
        ),
        path: "/about",
    },
    {
        label: "Blog",
        element: createElement(
            lazy(async () => await import('../views/blog-page/Blog')),
        ),
        path: "/blog",
    },
    {
        label: "Detail Blog",
        element: createElement(
            lazy(async () => await import('../views/detail-blog-page/DetailBlog')),
        ),
        path: "/detail-blog/:id",
    },
    {
        label: "Subscribe",
        element: createElement(
            lazy(async () => await import('../views/subscribe-page/Subscribe')),
        ),
        path: "/subscribe",
    },
    {
        label: "Categories",
        element: createElement(
            lazy(async () => await import('../views/categories-page/Categories')),
        ),
        path: "/categories",
    },
    {
        label: "Detail Product",
        element: createElement(
            lazy(async () => await import('../views/detail-product-page/DetailProduct')),
        ),
        path: "/detail-product/:id",
    },
];