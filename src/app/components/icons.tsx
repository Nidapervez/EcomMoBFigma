import React from 'react'

const Icons = () => {
  return (
    <div><>
    <div id="firejet-html-app">
      <div className="flex w-full flex-col">
        <div className="font-inter flex flex-grow flex-col justify-center gap-y-8 bg-neutral-50 px-40 py-20 font-medium">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-4 min-[1430px]:flex-nowrap">
            <div className="text-2xl leading-8 tracking-[0.16px]">
              Browse By Category
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <object
                data="/assets/Icon32pxArrow.svg"
                className="h-8 w-8 flex-shrink-0"
              />
              <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center">
                <object
                  data="/assets/Icon32pxArrow1.svg"
                  className="h-8 w-8 flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 text-center leading-6 tracking-[0px] min-[1430px]:flex-nowrap">
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-[51px] py-6">
              <object
                data="/assets/IconPhones.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Phones</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-[22px] py-6">
              <object
                data="/assets/IconSmartWatches.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Smart Watches</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-12 py-6">
              <object
                data="/assets/IconCameras.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Cameras</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-8 py-6">
              <object
                data="/assets/IconHeadphones.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Headphones</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-[38px] py-6">
              <object
                data="/assets/IconComputers.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Computers</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-[15px] bg-zinc-100 px-[51px] py-6">
              <object
                data="/assets/IconGaming.svg"
                className="h-12 w-12 flex-shrink-0 text-center"
              />
              <div className="text-center">Gaming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </>
  </div>
  )
}

export default Icons