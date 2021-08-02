import React from "react";
import { useRouter } from "next/router";
import ProductCard from '../components/product/ProductCard';
import productData from '../data/productData';

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="grid grid-cols-8 md:grid-cols-6 sm:grid-cols-2 gap-3">
      {productData.map((product, index) =>
        product.categories.find((category) => category.slug === slug) ? (
          <ProductCard
            product={product}
            key={index}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Category;
