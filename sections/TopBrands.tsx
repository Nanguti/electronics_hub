import SectionHeading from "@/components/SectionHeading";
import nike from "@/assets/products/nike_profile.jpg";
import adidas from "@/assets/products/adidas.png";
import compass from "@/assets/products/compass_profile.jpeg";
import Image from "next/image";
const brands = [
  {
    name: "Nike",
    href: "https://www.nike.com",
    image: nike,
    sales: 335,
    reviews: 134,
  },
  {
    name: "Adidas",
    href: "https://www.nike.com",
    image: adidas,
    sales: 134,
    reviews: 234,
  },
  {
    name: "Compass",
    href: "https://www.nike.com",
    image: compass,
    sales: 232,
    reviews: 134,
  },
];
const TopBrands = () => {
  return (
    <div className="py-8">
      <SectionHeading
        title="Top Brands"
        eyebrow="Visit Leading Brands in the Shoe Game"
      />
      <div className="grid mt-16 pt-8 lg:grid-cols-3 md:mt-2 gap-10">
        {brands.map((brand) => (
          <div className="flex justify-between col-span-1 ">
            <Image
              src={brand.image}
              alt={brand.name}
              className="size-16 rounded-md"
            />
            <span>
              <p className="text-base">{brand.name}</p>
              <p className="text-sm">{brand.sales}+ Billion Sales</p>
              <p className="text-sm">{brand.reviews}+ Million Reviews</p>
            </span>
            <button className="border border-red-600 rounded-lg py-2 px-4">
              Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
