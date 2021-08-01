import React from 'react'
import Image from 'next/image';

export default function ProductCard() {
    return (
        <div>
            <Image src='/images/products/demo-1.jpg' width={250} height={320} />
            <div className="font-semibold">My beautiful T-shirt</div>
        </div>
    )
}
