"use client"
import Image from "next/image"
import HeroImage from "../../../../public/assets/hero.png"
import HeroBar from "../../../../public/assets/hero-bar.png"
import Button from "../common/Button"
import CountUp from "react-countup"

const HeroSection = () => {
  return (
    <div className="bg-[#F3F0F1] w-full">
    <div className="flex justify-between items-center flex-wrap">
    <div className="md:flex-1 px-4">
        <div>
        <h1 className="font-extrabold text-[2.5rem]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-gray-500 text-[0.8rem]">
          we have clothes that suits your style and which you are proud to wear.<br/>
          from women to men
        </p>
        </div>
        <div>
          <Button title="shop now" className="px-12 py-1 mt-4 text-[0.8rem]"/>
        </div>
        <div className="flex gap-4 mt-4 flex-wrap">
          <div className="p-2 flex flex-col">
            <span className="font-extrabold text-[1.5rem]"><CountUp start={0} end={200} duration={2}/> +</span>
            <span className="text-[0.7rem] text-gray-500">International Brands</span>
          </div>
          <div className="border-l p-2 flex flex-col">
            <span className="font-extrabold text-[1.5rem]"><CountUp start={0} end={2000} duration={2}/> +</span>
            <span className="text-[0.7rem] text-gray-500">High-Quality Products</span>
          </div>
          <div className="border-l p-2 flex flex-col">
            <span className="font-extrabold text-[1.5rem]"><CountUp start={0} end={30000} duration={2}/> +</span>
            <span className="text-[0.7rem] text-gray-500">Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="md:flex-1 flex items-end justify-end">
      <Image
        src={HeroImage}
        alt="hero"
        />
        </div>
    </div>
    <div className="md:flex-1 flex items-end justify-end">
      <Image
        src={HeroBar}
        alt="hero"
        />
        </div>
    </div>
  )
}

export default HeroSection
