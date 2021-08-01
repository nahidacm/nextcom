import React from 'react'
import Image from 'next/image';

export default function ProductCard(props) {
    const img_width = 320, img_height = 400;

    return (
        <div className="border-2">
            <Image src={props.img_src} width={img_width} height={img_height} />
            <div className="font-semibold text-center p-2">{props.name}</div>
        </div>
    )
}
