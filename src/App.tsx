import { ImageWithFallback } from './components/figma/ImageWithFallback';
import svgPaths from "./imports/svg-kvk8plhuyf";
import imgPortraitHappyYoungWomanStandingWithBackpackHoldingBooksMobilePhoneIsolatedWhiteWallRemovebgPreview1 from "figma:asset/2bd5ea2fc5e21d5ff6a5d0a2672bd5685c545932.png";
import imgRectangle16 from "figma:asset/9138672a400b18c388b2e5ac915c3c9d651a1908.png";
import Frame559 from "./imports/Frame559-18-973";
import Frame239 from "./imports/Frame239";

// Header Component
function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-white">
      <div className="flex items-center justify-between px-[100px] py-0 h-[100px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[71.706px] h-[58px] relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 58">
              <g>
                <g>
                  <path d={svgPaths.p3b70de80} fill="#FA1239" />
                  <path d={svgPaths.pfdd980} fill="#FA1239" />
                </g>
                <path d={svgPaths.p2917e000} fill="#FA1239" />
              </g>
            </svg>
          </div>
          <div className="ml-[25.67px] relative">
            <div className="h-[24.067px] w-[147.552px] relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 25">
                <g>
                  <path d={svgPaths.p3ddf8600} fill="black" />
                  <path d={svgPaths.p21850800} fill="black" />
                  <path d={svgPaths.p3266cf80} fill="black" />
                  <path d={svgPaths.p2df18500} fill="black" />
                  <path d={svgPaths.p7fd6280} fill="black" />
                  <path d={svgPaths.p2efaf400} fill="black" />
                  <path d={svgPaths.p23425cf0} fill="black" />
                </g>
              </svg>
            </div>
            <div className="h-[21.707px] w-[148.384px] relative mt-[13.228px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 22">
                <g>
                  <path d={svgPaths.pc6fd900} fill="black" />
                  <path d={svgPaths.p1b99f880} fill="black" />
                  <path d={svgPaths.p3a733080} fill="black" />
                  <path d={svgPaths.p2ff4ca00} fill="black" />
                  <path d={svgPaths.p2d1cd00} fill="black" />
                  <path d={svgPaths.p1d800c80} fill="black" />
                  <path d={svgPaths.p5bcf100} fill="black" />
                  <path d={svgPaths.p199fb800} fill="black" />
                  <path d={svgPaths.pd98ff00} fill="black" />
                  <path d={svgPaths.pb91f080} fill="black" />
                  <path d={svgPaths.paf0a200} fill="black" />
                  <path d={svgPaths.p198e1c00} fill="black" />
                  <path d={svgPaths.pb987df0} fill="black" />
                  <path d={svgPaths.pece7100} fill="black" />
                  <path d={svgPaths.p18bf6480} fill="black" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[4px] p-[10px]">
            <span className="font-medium text-[18px] text-[#282828] capitalize">Home</span>
          </div>
          <div className="flex items-center gap-[4px] p-[10px]">
            <span className="font-medium text-[18px] text-[#282828] capitalize">About Us</span>
          </div>
          <div className="flex items-center gap-[4px] p-[10px]">
            <span className="font-medium text-[18px] text-[#282828] capitalize">Our Services</span>
          </div>
          <div className="flex items-center gap-[4px] p-[10px]">
            <span className="font-medium text-[18px] text-[#282828] capitalize">Pricing</span>
          </div>
          <div className="flex items-center gap-[4px] p-[10px]">
            <span className="font-medium text-[18px] text-[#282828] capitalize">FAQ</span>
          </div>
        </nav>

        {/* Get Quote Button */}
        <div className="flex items-center gap-[24px]">
          <button className="bg-[#fa1239] px-[22px] py-[14px] rounded-[30px] shadow-[0px_0px_12px_0px_rgba(250,18,57,0.58)] h-[46px] flex items-center justify-center">
            <span className="font-medium text-[18px] text-white uppercase">Get a quote</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative h-[909px] w-full overflow-hidden bg-gradient-to-br from-[#FFE4E9] via-[#FFCBD4] to-[#FECDD5]">
      {/* Pink gradient background with circles */}
      <div className="absolute inset-0">
        {/* Large circle */}
        <div className="absolute h-[634px] w-[634px] left-[766px] top-[283px] opacity-60">
          <div className="size-full rounded-full bg-gradient-radial from-[#FFE4E9] to-[#FFCBD4]"></div>
        </div>
        
        {/* Medium circle */}
        <div className="absolute h-[476px] w-[476px] left-[845px] top-[362px] opacity-70">
          <div className="size-full rounded-full bg-gradient-radial from-[#FECDD5] to-[#FFE2E7]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-[100px] top-[228px] w-[620px] flex flex-col gap-[38px] items-start z-10">
        {/* Main heading */}
        <h1 className="text-[64px] font-bold capitalize text-black leading-none">
          <span className="block leading-[78px]">Your Resume </span>
          {/* <span className="block leading-[85px] text-[#fa1239]">Deserves a yes</span>
          <span>let's</span> */}
         <span className="block leading-[85px]">
           <span className="text-[#fa1239]">Deserves a yes</span>
           <span> let's</span>
         </span>
        <div className="relative h-[17px] w-[363px]">
          <div className="absolute inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 21">
              <g>
                <path d={svgPaths.p26b6900} stroke="#FA1239" strokeWidth="3" />
                <path d={svgPaths.p26e56bc0} stroke="#FA1239" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </div>
          <span className="block leading-[85px]"> make it happen</span>
        </h1>

        {/* Description */}
        <p className="text-[16px] font-normal leading-[34px] text-black capitalize w-[485px]">
          If your resume isn't getting responses, it's time for an upgrade. Get an ATS-optimized resume crafted by HR experts to help you land more interviews. Our resumes are designed to get your foot in the door and place your name at the top of the shortlist.
        </p>

        {/* Buttons */}
        <div className="flex gap-[24px] items-center">
          <button className="bg-white border border-[#fa1239] border-solid px-[22px] py-[14px] rounded-[30px] shadow-[0px_0px_12px_0px_rgba(250,18,57,0.58)] h-[46px] flex items-center justify-center">
            <span className="font-medium text-[18px] text-[#fa1239] uppercase">Resume Pakages</span>
          </button>
          <button className="bg-[#fa1239] px-[22px] py-[14px] rounded-[30px] shadow-[0px_0px_12px_0px_rgba(250,18,57,0.58)] h-[46px] flex items-center justify-center">
            <span className="font-medium text-[18px] text-white uppercase">Contact us</span>
          </button>
        </div>

        {/* Decorative lines */}
      </div>

      {/* Woman image */}
      <div className="absolute h-[727px] w-[506px] left-[811px] top-[190px] z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="Happy young woman with backpack holding books and mobile phone" 
            className="absolute h-[104.35%] left-0 max-w-none top-[-4.35%] w-full" 
            src={imgPortraitHappyYoungWomanStandingWithBackpackHoldingBooksMobilePhoneIsolatedWhiteWallRemovebgPreview1} 
          />
        </div>
      </div>

      {/* Instructor Rating Card */}
      <div className="absolute left-[729px] top-[585px] backdrop-blur-[45.5px] bg-[rgba(255,255,255,0.79)] px-[15px] py-[20px] rounded-[10px] flex gap-[20px] items-center justify-center z-10">
        <div className="text-[64px] font-semibold leading-normal text-[#1cb098] capitalize">4.9</div>
        <div className="flex flex-col gap-[11px] items-start w-[199px]">
          {/* 5 Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4" fill="#FFAB00" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <div className="text-[24px] font-semibold leading-normal text-black capitalize">Instructor Rating</div>
        </div>
      </div>

      {/* Resume Created Card */}
      <div className="absolute left-[1129px] top-[734px] h-[133.427px] w-[270.664px] z-10">
        <Frame239 />
      </div>
    </section>
  );
}

// What You Get Section - Using Figma Import
function WhatYouGetSection() {
  return <Frame559 />;
}

// Main App Component
export default function App() {
  return (
    <div className="size-full">
      <Header />
      <HeroSection />
      <WhatYouGetSection />
    </div>
  );
}