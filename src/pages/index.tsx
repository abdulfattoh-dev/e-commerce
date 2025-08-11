import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Layout = lazy(() => import("./layout/Layout"));

const AboutPage = lazy(() => import("./About/About"));
const DeliveryPage = lazy(() => import("./Delivery/Delivery"));
const ReturnsPage = lazy(() => import("./Returns/Returns"));
const WarrantyPage = lazy(() => import("./Warranty/Warranty"));
const ContactsPage = lazy(() => import("./Contacts/Contacts"));
const BlogPage = lazy(() => import("./Blog/Blog"));
const FavoritesPage = lazy(() => import("./Favorites/Favorites"));
const ComparePage = lazy(() => import("./Compare/Compare"));
const CartPage = lazy(() => import("./Cart/Cart"));

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
            { path: "about", element: <AboutPage /> },
            { path: "delivery", element: <DeliveryPage /> },
            { path: "returns", element: <ReturnsPage /> },
            { path: "warranty", element: <WarrantyPage /> },
            { path: "contacts", element: <ContactsPage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "favorites", element: <FavoritesPage /> },
            { path: "compare", element: <ComparePage /> },
            { path: "cart", element: <CartPage /> },
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
