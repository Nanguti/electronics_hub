import Image from "next/image";
import { LuFilter } from "react-icons/lu";
import { MdOutlineFilterList, MdSearch } from "react-icons/md";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SidebarFilters from "@/components/SidebarFilters";
import Input from "@/components/Input";
import TopBrands from "@/sections/TopBrands";
import ButtonSecondary from "@/components/ButtonSecondary";
import ProductCard from "@/components/ProductCard";
import airforce1 from "@/assets/products/airForce1.webp";
import newBalance_4 from "@/assets/products/new_balance4.webp";
import newBalance2 from "@/assets/products/new_balance2.webp";
import redlow from "@/assets/products/redlow.webp";
import dunklow from "@/assets/products/dunklow.webp";
import slides from "@/assets/products/slides.webp";
import blacLebron from "@/assets/products/blackLebron.webp";

const products = [
  {
    name: "Air Force 1",
    price: 3000,
    category: "Men's Shoes",
    brans: "Nike",
    image: airforce1,
  },
  {
    name: "New Balance",
    price: 4000,
    category: "Men's Shoes",
    brans: "Nike",
    image: blacLebron,
  },
  {
    name: "New Balance 2",
    price: 5000,
    category: "Men's Shoes",
    brans: "Nike",
    image: newBalance2,
  },
  {
    name: "New Balance 4",
    price: 6000,
    category: "Men's Shoes",
    brans: "Nike",
    image: newBalance_4,
  },
  {
    name: "Red Low",
    price: 7000,
    category: "Men's Shoes",
    brans: "Nike",
    image: redlow,
  },
  {
    name: "Dunk Low",
    price: 5000,
    category: "Men's Shoes",
    brans: "Nike",
    image: dunklow,
  },
  {
    name: "Slides",
    price: 3000,
    category: "Men's Shoes",
    brans: "Nike",
    image: slides,
  },
  {
    name: "Black Lebron",
    price: 7000,
    category: "Men's Shoes",
    brans: "Nike",
    image: blacLebron,
  },
  {
    name: "New Balance",
    price: 4000,
    category: "Men's Shoes",
    brans: "Nike",
    image: blacLebron,
  },
];

const Products = () => {
  return (
    <div className="container">
      <div className="relative flex flex-col lg:flex-row">
        <div className="container relative flex flex-col lg:flex-row" id="body">
          <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
            <SidebarFilters />
          </div>
          <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
          <div className="relative flex-1">
            <div
              className="top-10 z-10 mb-3 items-center gap-5 space-y-5 bg-gray-900 py-10 lg:sticky 
            lg:flex lg:space-y-0"
            >
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-neutral-300 px-4">
                <MdSearch className="text-2xl text-neutral-500" />
                <Input
                  type="text"
                  rounded="rounded-lg"
                  placeholder="Search..."
                  sizeClass="h-12 px-0 py-3"
                  className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1 bg-gray">
                  <LuFilter />
                  Filters
                </button>
                <button className="flex items-center gap-2 bg-gray">
                  Most popular
                  <MdOutlineFilterList />
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-2 md:mt-2 gap-20">
              <ProductCard
                className=" px-2 pt-4 
              md:pt-4 pb-0 md:px-4 lg:pt-4 lg:px-4 "
              >
                <div className="grid lg:grid-cols-3 lg:gap-2">
                  {products.map((product, index) => (
                    <div
                      className="pb-8 col-span-1  p-2 rounded-md"
                      key={index}
                    >
                      <span
                        className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex 
                        font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                      >
                        {product.name} | Kes. {product.price}
                      </span>
                      <hr className="border-t-2 border-white/10 mt-4 md:mt-5 mb-4" />

                      <Image
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg"
                      />

                      <a href="#" className="">
                        <button
                          className="bg-white font-semibold h-12 w-full md:w-auto px-6 
                          rounded-lg text-gray-950 inline-flex items-center justify-center gap-2 mt-8"
                        >
                          <span>View Product</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>
                  ))}
                </div>
              </ProductCard>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24">
        <TopBrands />
      </div>
    </div>
  );
};

export default Products;
