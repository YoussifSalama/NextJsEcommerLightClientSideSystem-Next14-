import Link from "next/link";
import Button from "../common/Button";
import EmailBar from "../common/EmailBar";
import FooterRouteList from "../common/FooterRouteList";
import footerItems from "@/data/footer.json";
import { Facebook, Github, Instagram, TwitterIcon } from "lucide-react";
import Image from "next/image";
import footerPayments from "../../../../public/assets/footer-payments.png";
export default function Footer() {
  return (
    <footer className="mt-20 px-4 pb-12 bg-gray-100">
      <div className="bg-black rounded-xl m-auto px-6 py-4 flex items-center justify-between
      translate-y-[-50%] max-md:translate-y-[-25%]
      z-[50]
      relative
      max-md:flex-col
      ">
        <div className="text-white font-bold text-[2rem] uppercase flex-[2]">
          <p className="md:w-[70%] max-md:text-center">
          stay uptodate about our latest offers
          </p>
        </div>
        <div className="flex md:flex-col gap-2 md:flex-1
        max-sm:flex-col
        ">
          <EmailBar />
          <Button title="subscribe to newsletter" />
        </div>
      </div>
      <div className="flex justify-between items-start flex-wrap gap-x-2 pb-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="font-extrabold text-[2rem]">
            <Link href="/">SHOP.CO</Link>
          </div>
          <p className="text-gray-500">
            we have clothes that suits your style and <br/> which you are proud to wear.<br/>
            from women to men
          </p>
          <ul className="flex items-center gap-3">
            <li className="bg-white border p-2 rounded-full"><Link href="/"><TwitterIcon className="w-4 h-4"/></Link></li>
            <li className="bg-black border p-2 rounded-full"><Link href="/"><Facebook className="w-4 h-4 text-white"/></Link></li>
            <li className="bg-white border p-2 rounded-full"><Link href="/"><Instagram className="w-4 h-4"/></Link></li>
            <li className="bg-white border p-2 rounded-full"><Link href="/"><Github className="w-4 h-4"/></Link></li>
          </ul>
        </div>
        <div className="flex-[2]">
        <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-sm:grid-cols-1">
          {footerItems?.map((item, index) => {
            return (
              <li key={index}>
                <FooterRouteList list={item} />
              </li>
            );
          })}
        </ul>
        </div>
      </div>
        <hr/>
      <div className="flex items-center justify-between pt-4 text-gray-500 text-[0.8rem]">
        <span>SHOP.CO &copy; {new Date().getFullYear()}</span>
        <span>
          <Image
          src={footerPayments}
          width={200}
          height={100}
          className="object-contain"
          alt="payment methods"
          ></Image>
        </span>
      </div>
    </footer>
  );
}
