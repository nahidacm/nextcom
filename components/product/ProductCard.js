import React from "react";
import Image from "next/image";
import imagePlaceholder from "../layout/ImagePlaceholder";
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../../redux/actions';

export default function ProductCard(props) {
  const img_width = 320,
    img_height = 400;
  const dispatch = useDispatch();

  return (
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="prod-title">
            <p className="text-xl uppercase text-gray-900 font-bold">{props.product.name}</p>
          </div>
          <div className="prod-img">
          <Image src={props.product.image} width={img_width} height={img_height} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${imagePlaceholder}`} />
          </div>
          <div className="prod-info grid gap-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">৳ { props.product.price }</p>
              <button onClick={()=>dispatch(addToCart(props.product))} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
  );
}
