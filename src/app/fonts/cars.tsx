import React from 'react';
import one from "@/Iphone 14 pro 1.png";
import one2 from "@/Iphone 14 pro 1 (1).png";
import one3 from "@/Iphone 14 pro 1 (2).png";
import one4 from "@/Iphone 14 pro 1 (3).png";
import one5 from "@/Iphone 14 pro 1 (4).png";
import one6 from "@/Iphone 14 pro 1 (5).png";
import one7 from "@/Iphone 14 pro 1 (6).png";
import one8 from "@/Iphone 14 pro 1 (7).png";

import Image from 'next/image';

const Card = () => {
  return (
    <div>
      <div id="firejet-html-app">
        <div className="font-inter flex w-full flex-col gap-y-8 bg-white px-40 py-14 text-center font-medium tracking-[0px]">
          <div className="flex items-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-lg leading-8 min-[1430px]:flex-nowrap">
              <div className="w-24 flex-shrink-0">
                <div className="text-center">New Arrival</div>
                <object
                  data="/assets/Line.svg"
                  className="h-0.5 flex-shrink-0 self-stretch text-center"
                />
              </div>
              <div className="text-left text-[gray]">Bestseller</div>
              <div className="text-left text-[gray]">Featured Products</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[one, one2, one3, one4, one5, one6, one7, one8].map((imgSrc, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 p-4">
                <div className="relative w-full h-52"> {/* Increased height */}
                  <Image
                    src={imgSrc}
                    alt={`Product ${index + 1}`}
                    loading="lazy"
                    layout="fill" // Fill the parent container
                    objectFit="contain" // Ensure the image fits within the container
                  />
                </div>
                <div className="text-center">
                  <p>Product {index + 1}</p>
                </div>
                <div className="text-center text-2xl font-semibold leading-6">$399</div>
                <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white cursor-pointer">Buy Now</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
