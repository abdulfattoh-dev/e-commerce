import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Layout = lazy(() => import("./layout/Layout"));

const ProductDetail = lazy(() => import("./product/ProductDetail"));
const ProductDescription = lazy(() => import("./product/description"));
const ProductCharacteristics = lazy(() => import("./product/characteristics"));
const ProductVideo = lazy(() => import("./product/video"));
const ProductGallery = lazy(() => import("./product/gallery"));

const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "product/:id", element: <ProductDetail />, children: [
                { index: true, element: <ProductDescription /> },
                { path: 'characteristics', element: <ProductCharacteristics /> },
                { path: 'video', element: <ProductVideo /> },
                { path: 'gallery', element: <ProductGallery /> },
              ]
            },
          ],
        }
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
