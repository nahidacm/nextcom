import React from "react";
import { useRouter } from "next/router";
import productData from "../data/productData";
import Image from "next/image";
import imagePlaceholder from '../components/layout/ImagePlaceholder';

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = productData.find((product) => product.slug === slug);

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <Image src={product.image} width="600" height="600" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${imagePlaceholder}`}/>
        </div>
        <div className="col-span-3">
          <div className="font-bold text-lg">{product.name}</div>
          <div className="font-thin">{product.description}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
