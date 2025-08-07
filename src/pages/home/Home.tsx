import React from "react";
import ProductView from "../../components/product-view/ProductView";
import Brands from "../../components/brands/Brands";

const Home = () => {
  return (
    <div>
      <ProductView />
      <Brands />
    </div>
  );
};

export default React.memo(Home);
