import React from 'react';
import one from "@/4.png";
import one1 from "@/3.png";
import one2 from "@/2.png";
import one3 from "@/1.png";
import Image from 'next/image';

const Discount = () => {
  return (
    <div>
      <div className="h-[656px] px-40 py-20 bg-white flex-col justify-start items-start gap-8 inline-flex max-md:px-5 max-md:py-10">
        <div className="text-center text-black text-2xl font-medium font-['Inter'] leading-loose">
          Discounts up to -50%
        </div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex flex-wrap mr-24">
          <div className="grow shrink basis-0 px-4 py-6 bg-[#f6f6f6] rounded-[9px] flex-col justify-start items-center gap-4 inline-flex max-md:w-full">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <div className="w-8 h-8 px-[1.33px] pt-[1.33px] pb-1 justify-center items-center inline-flex" />
              </div>
            </div>
            <Image className="w-40 h-40" src={one} alt="" />
            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </div>
                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  $1437
                </div>
              </div>
              <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium font-['Inter'] leading-normal">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 px-4 py-6 bg-[#f6f6f6] rounded-[9px] flex-col justify-start items-center gap-4 inline-flex max-md:w-full">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <div className="w-8 h-8 px-[1.33px] pt-[1.33px] pb-1 justify-center items-center inline-flex" />
              </div>
            </div>
            <Image className="w-40 h-40" src={one1} alt="" />
            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
                  AirPods Max Silver
                  <br />
                  Starlight Aluminium{" "}
                </div>
                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  $549
                </div>
              </div>
              <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium font-['Inter'] leading-normal">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 px-4 py-6 bg-[#f6f6f6] rounded-[9px] flex-col justify-start items-center gap-4 inline-flex max-md:w-full">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <div className="w-8 h-8 px-[1.33px] pt-[1.33px] pb-1 justify-center items-center inline-flex" />
              </div>
            </div>
            <Image className="w-40 h-40" src={one2} alt="" />
            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
                  Apple Watch Series 9 GPS 41mm Starlight Aluminium{" "}
                </div>
                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  $399
                </div>
              </div>
              <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium font-['Inter'] leading-normal">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 px-4 py-6 bg-[#f6f6f6] rounded-[9px] flex-col justify-start items-center gap-4 inline-flex max-md:w-full">
            <div className="self-stretch justify-end items-center gap-2 inline-flex">
              <div className="w-8 h-8 justify-center items-center flex">
                <div className="w-8 h-8 px-[1.33px] pt-[1.33px] pb-1 justify-center items-center inline-flex" />
              </div>
            </div>
            <Image className="w-40 h-40" src={one3} alt="" />
            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
                  Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                </div>
                <div className="self-stretch text-center text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  $1499
                </div>
              </div>
              <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-sm font-medium font-['Inter'] leading-normal">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
