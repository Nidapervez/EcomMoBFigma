import React from 'react'
import one from "@/Iphone 14 pro 1.png"
import one2 from "@/Iphone 14 pro 1 (1).png"
import one3 from "@/Iphone 14 pro 1 (2).png"
import one4 from "@/Iphone 14 pro 1 (3).png"
import one5 from "@/Iphone 14 pro 1 (4).png"
import one6 from "@/Iphone 14 pro 1 (5).png"
import one7 from "@/Iphone 14 pro 1 (6).png"
import one8 from "@/Iphone 14 pro 1 (7).png"

import Image from 'next/image'

const Card = () => {
  return (
    <div><div id="firejet-html-app">
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
      <div className="flex flex-grow flex-wrap justify-center gap-x-4 gap-y-4 leading-6 min-[1430px]:flex-nowrap">
        <div className="flex flex-col gap-y-4 text-center">
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
            <Image
              src={one}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="flex items-center justify-center self-stretch text-center">
              <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $900
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection1.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
           <Image
              src={one2}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="flex items-center justify-center self-stretch text-center">
              <p>Samsung Galaxy Watch6 Classic 47mm Black</p>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $369
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-center">
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection2.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
           <Image
              src={one3}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="flex items-center justify-center self-stretch text-center">
              <p>Blackmagic Pocket Cinema Camera 6k</p>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $2535
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection3.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
           <Image
              src={one4}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="self-stretch text-center">
              <span>
                <p className="text-center">Galaxy Z Fold5 Unlocked</p>
                <p className="text-center">&nbsp;256GB</p>
                <p className="text-center">&nbsp;Phantom Black</p>
              </span>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $1799
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-center">
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection4.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
          <Image
              src={one5}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="flex items-center justify-center self-stretch text-center">
              <p>Apple Watch Series 9 GPS 41mm Starlight Aluminium</p>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $399
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection5.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
            <Image
              src={one6}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="self-stretch text-center">
              <span>
                <p className="text-center">Galaxy Buds FE</p>
                <p className="text-center">Graphite</p>
              </span>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $99.99
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-center">
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection6.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
           <Image
              src={one7}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="self-stretch text-center">
              <span>
                <p className="text-center">AirPods Max Silver</p>
                <p className="text-center">Starlight Aluminium</p>
              </span>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $549
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 rounded-[9px] bg-neutral-100 px-4 py-6 [max-width:268px]">
            <object
              data="/assets/TopSection7.svg"
              className="h-8 w-60 flex-shrink-0 text-center"
            />
           <Image
              src={one8}
              alt=""
              loading="lazy"
              className="h-40 w-40 flex-shrink-0 object-cover object-center text-center"
            />
            <div className="flex items-center justify-center self-stretch text-center">
              <p>Apple iPad 9 10 64GB Wi-Fi Silver (MK2L3) 2021</p>
            </div>
            <div className="self-stretch text-center text-2xl font-semibold leading-6 tracking-[0.48px]">
              $398
            </div>
            <div className="flex items-end justify-center pt-2 text-center">
              <div className="rounded-lg bg-black px-16 py-3 text-sm leading-6 text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Card