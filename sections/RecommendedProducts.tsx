import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import airforce1 from "@/assets/products/airForce1.webp";
import newBalance_4 from "@/assets/products/new_balance4.webp";
import newBalance2 from "@/assets/products/new_balance2.webp";
import redlow from "@/assets/products/redlow.webp";
import dunklow from "@/assets/products/dunklow.webp";
import slides from "@/assets/products/slides.webp";
import blacLebron from "@/assets/products/blackLebron.webp";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
const products = [
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
];
const RecommendedProducts = () => {
  return (
    <div className="py-16">
      {" "}
      <SectionHeading
        title="Recommended"
        eyebrow="Products Recommended Just For You ..."
      />
      <div className="flex flex-col mt-2 md:mt-2 gap-20">
        <ProductCard
          className=" px-2 pt-4 
              md:pt-4 pb-0 md:px-4 lg:pt-4 lg:px-4 "
        >
          <div className="grid lg:grid-cols-4 lg:gap-2">
            {products.map((product, index) => (
              <div className="pb-8 col-span-1  p-2 rounded-md" key={index}>
                <span
                  className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold
                 uppercase tracking-widest text-sm text-transparent bg-clip-text"
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
                    className="bg-white font-semibold h-12 w-full md:w-auto px-6 rounded-lg
                 text-gray-950 inline-flex items-center justify-center gap-2 mt-8"
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
  );
};

export default RecommendedProducts;
