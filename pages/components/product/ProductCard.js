import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import imagePlaceholder from '../layout/ImagePlaceholder';

export default function ProductCard(props) {
    const img_width = 320, img_height = 400;

    return (
        <div className="border-2">
            <Image src={props.product.image} width={img_width} height={img_height} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${imagePlaceholder}`} />
            <div className="font-semibold text-center p-2">
                <Link href={`/p/${props.product.slug}`}>
                    <a>{props.product.name}</a>
                </Link>
            </div>
        </div>
    )
}
