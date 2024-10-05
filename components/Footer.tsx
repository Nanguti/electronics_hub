import FooterBanner from "@/sections/FooterBanner";
import Link from "next/link";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/collections",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Signup",
    href: "/",
  },
  {
    name: "Return Policy",
    href: "/return-policy",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Faqs",
    href: "/faqs",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <FooterBanner />
      <hr className="border-t-2 border-white/15 lg:mt-8 md:mt-5 pb-16" />
      <div className="grid lg:grid-cols-4 py-4 gap-4 justify-between">
        <div className=" col-span-1 ">
          <div className="flex flex-col">
            <span className="text-sm py-2">About Store</span>
            <span className="text-sm py-2">
              Some cool info about the company...
            </span>
          </div>
        </div>
        <div className="flex flex-col col-span-1 ">
          {links.slice(0, 3).map((link) => (
            <Link href={link.href} className="text-sm py-2">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col col-span-1 ">
          {links.slice(3, 6).map((link) => (
            <Link href={link.href} className="text-sm py-2">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col col-span-1 ">
          {links.slice(6, 9).map((link) => (
            <Link href={link.href} className="text-sm py-2">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-white/15 mt-16 md:mt-5 pb-4" />
      <div className="grid lg:grid-cols-3 justify-between">
        <span className="cols-span-1 text-xs">
          All Rights Reserved @ {year}{" "}
        </span>
        <Link href="/terms-conditions.html cols-span-1 text-xs">
          Terms and Conditions
        </Link>
        <Link href="/terms-conditions.html cols-span-1 text-xs">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
