import Image from "next/image";
import Discount from "./components/discount";
import Icons from "./components/icons";
import Pop from "./components/pop";
import Card from "./fonts/cars";
import one from "@/Banner 2.png";



export default function Home() {
  return (
   <div>
<header className="flex flex-col">
  <nav className="flex flex-wrap gap-10 justify-between items-center px-40 py-4 w-full bg-white border-b border-solid border-b-zinc-400 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col items-center self-stretch my-auto bg-white w-[65px]">
      <a href="/" className="flex items-center w-[65px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/515715d61f2e8c1c8f738e783232287309473044894ef92aa4a9e8b109791393?apiKey=63020574feac4f3895ec244f357db276&"
          alt="Company Logo"
          className="object-contain self-stretch my-auto aspect-[2.96] fill-black w-[65px]"
        />
      </a>
    </div>
    <form
      role="search"
      className="flex gap-2 items-center self-stretch p-4 my-auto text-sm font-medium leading-none rounded-lg bg-neutral-100 min-h-[56px] min-w-[240px] text-stone-500 w-[372px]"
    >
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c08d4ddf7e27a14fee29bb40ba87b023238a48dbf6644179223163c14bd556?apiKey=63020574feac4f3895ec244f357db276&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <input
        type="search"
        id="searchInput"
        placeholder="Search"
        className="bg-transparent border-none outline-none w-full"
      />
    </form>
    <ul className="flex gap-10 items-start self-stretch my-auto text-base font-medium text-black min-w-[240px]">
      <li>
        <a href="/" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="opacity-30">
          About
        </a>
      </li>
      <li>
        <a href="/contact" className="opacity-30">
          Contact Us
        </a>
      </li>
      <li>
        <a href="/blog" className="opacity-30">
          Blog
        </a>
      </li>
    </ul>
    <div className="flex gap-6 justify-center items-center self-stretch my-auto">
      <button
        aria-label="Notifications"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?apiKey=63020574feac4f3895ec244f357db276&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </button>
      <button
        aria-label="Messages"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/53b362c5faf184b3e1e97e9c196992a672472cd22fc1e00e5d1c34c825a1b05c?apiKey=63020574feac4f3895ec244f357db276&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </button>
      <button
        aria-label="User Profile"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f70576b8220eed338b22cd62f926d03148a675ef08d90ce4338b7accd39bfaf?apiKey=63020574feac4f3895ec244f357db276&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </button>
    </div>
  </nav>
</header>
<div>
<section className="flex overflow-hidden flex-wrap gap-6 justify-between items-center px-40 max-md:px-5">
  <article className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[320px] max-md:max-w-full">
    <header className="flex flex-col w-full text-white max-md:max-w-full">
      <h2 className="text-2xl font-semibold leading-none max-md:max-w-full">
        Pro.Beyond.
      </h2>
      <h1 className="mt-6 text-8xl font-thin tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
        IPhone 14 <span className="font-semibold">Pro</span>
      </h1>
    </header>
    <p className="mt-6 text-lg font-medium leading-none text-neutral-400 max-md:max-w-full">
      Created to change everything for the better. For everyone
    </p>
    <a
      href="#shop"
      role="button"
      tabIndex={0}
      className="gap-2 self-start px-14 py-4 mt-6 text-base font-medium text-center text-white rounded-md border border-white border-solid max-md:px-5"
    >
      Shop Now
    </a>
  </article>
  <figure className="flex flex-col self-stretch my-auto min-w-[240px] w-[406px]">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d540e3f81d190798d440dcdbb0a6b51754fa027d03d611527fc342d70ef0673?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
      alt="iPhone 14 Pro"
      className="object-contain w-full aspect-[0.64]"
    />
  </figure>
</section>
<div>
  

<section className="flex flex-wrap items-start">
  <div className="flex flex-col flex-1 shrink justify-center basis-80 min-w-[240px] max-md:max-w-full">
    <article className="flex overflow-hidden relative gap-10 items-start pr-12 pl-80 w-full font-medium bg-white min-h-[328px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46864a814c25f91fa3ce6880e7aad8fdf44ecad0ae0c4e2f8b42a5d0441201c?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
        alt="PlayStation 5 gaming console"
        className="object-contain absolute bottom-0 left-0 z-0 self-start aspect-[1.1] h-[343px] min-w-[240px] right-[360px] w-[360px]"
      />
      <header className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 max-w-[404px] min-w-[240px]">
        <h2 className="text-5xl leading-none text-black max-md:text-4xl">
          Playstation 5
        </h2>
        <p className="mt-4 text-sm leading-6 text-neutral-400">
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
          redefine your PlayStation experience.
        </p>
      </header>
    </article>
    <div className="flex flex-wrap w-full min-h-[272px] max-md:max-w-full">
      <article className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full bg-gray-200 basis-0 min-w-[240px] max-md:px-5">
        <header className="flex z-0 flex-col justify-center my-auto w-40 h-64 max-w-[168px]">
          <h2 className="text-3xl font-light leading-10 text-black">
            Apple <br /> AirPods <span className="font-medium">Max</span>
          </h2>
          <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
            Computational audio. Listen, its powerful
          </p>
        </header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e16c2f9b62bf2d1f74837b96fe88b80556964b2dcfd99a51b1df6e1b7e2dff?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          alt="Apple AirPods Max headphones"
          className="object-contain absolute bottom-0 left-0 right-64 z-0 shrink-0 self-start aspect-[0.38] h-[272px] w-[104px]"
        />
      </article>
      <article className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full basis-0 bg-neutral-700 min-w-[240px] max-md:px-5">
        <header className="flex z-0 flex-col justify-center my-auto w-40 h-64 max-w-[176px]">
          <h2 className="text-3xl font-light leading-10 text-white">
            Apple <br /> Vision{" "}
            <span className="font-medium text-white">Pro</span>
          </h2>
          <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
            An immersive way to experience entertainment
          </p>
        </header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28db96c950873cbf35f90622187dbeabeb8136492ded99cfc9118fe9ead6388?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          alt="Apple Vision Pro headset"
          className="object-contain absolute left-0 right-56 z-0 shrink-0 self-start aspect-[0.72] inset-y-[41px] w-[136px]"
        />
      </article>
    </div>
  </div>
  <article className="flex overflow-hidden relative flex-1 shrink gap-px items-start py-40 pr-64 pl-14 bg-gray-200 basis-0 min-h-[600px] min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
    <header className="flex z-0 flex-col flex-1 shrink my-auto basis-[116px] max-w-[360px] min-w-[240px]">
      <div className="flex flex-col w-full">
        <h2 className="text-6xl font-thin text-black leading-[56px] max-md:text-4xl max-md:leading-10">
          Macbook <span className="font-medium">Air</span>
        </h2>
        <p className="mt-4 text-sm font-medium leading-6 text-neutral-400">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
      </div>
      <a
        href="#"
        role="button"
        tabIndex={0}
        className="gap-2 self-start px-14 py-4 mt-4 text-base font-medium text-center text-black rounded-md border border-black border-solid max-md:px-5"
      >
        Shop Now
      </a>
    </header>
    <div className="flex absolute left-2/4 z-0 flex-col self-start px-14 pb-9 -translate-x-2/4 bottom-[49px] h-[502px] min-w-[240px] translate-y-[0%] w-[292px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43af78ad6da8882093f554b85e448e62e84d4e44043b785238da64c28e3137a6?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
        alt="MacBook Air 15-inch laptop"
        className="object-contain mr-0 w-full rounded-none aspect-[1.46] max-md:max-w-full"
      />
    </div>
  </article>
</section>

<Icons/>
<Card/>
<Pop/>
<Discount/>

 
      
         <Image 
        src={one} 
        alt="Description of image" 
        width={1800}  // Set width in pixels
        height={800} // Set height in pixels  
            />
    
   






<div className="h-[504px] w-full px-40 py-[104px] bg-black flex-col justify-center items-start gap-6 inline-flex">
  <div className="self-stretch justify-between items-start inline-flex">
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="flex-col justify-start items-center gap-2.5 flex">
        <div className="justify-start items-center inline-flex" />
      </div>
      <div className="w-96 text-[#cfcfcf] text-sm font-medium font-['Inter'] leading-normal">
        We are a residential interior design firm located in Portland. Our
        boutique-studio offers more than
      </div>
    </div>
    <div className="h-64 justify-between items-start flex">
      <div className="w-[295.50px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-base font-semibold font-['Inter'] leading-none">
          Services
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Bonus program
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Gift cards
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Credit and payment
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Service contracts
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Non-cash account
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Payment
        </div>
      </div>
      <div className="w-[295.50px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-base font-semibold font-['Inter'] leading-none">
          Assistance to the buyer
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Find an order
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Terms of delivery
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Exchange and return of goods
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Guarantee
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Frequently asked questions
        </div>
        <div className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
          Terms of use of the site
        </div>
      </div>
    </div>
  </div>
  <div className="w-[173px] justify-between items-start inline-flex">
    <div className="w-4 h-4 py-[1.33px] justify-center items-center flex" />
    <div className="w-4 h-4 px-[4.15px] py-[0.02px] justify-center items-center flex" />
    <div className="w-4 h-4 pl-[1.42px] pr-[1.36px] pt-[0.53px] pb-[0.62px] justify-center items-center flex" />
    <div className="w-4 h-4 relative" />
  </div>
</div>


</div>
</div>
 </div>
  );
}
