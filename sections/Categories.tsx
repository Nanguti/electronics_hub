import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import categoryImage from "@/assets/images/footer-banner.jpg";

const categories = [
  {
    name: "sneakers",
    link: "/collection",
  },
  {
    name: "boots",
    link: "/collection",
  },
  {
    name: "rubbers",
    link: "/collection",
  },
  {
    name: "sandles",
    link: "/collection",
  },
];
const Categories = () => {
  return (
    <div className="py-8">
      <SectionHeading title="Categories" eyebrow="Shop By Category" />
      <div className="flex flex-col mt-2 md:mt-2 gap-20">
        <CategoryCard className="">
          <div className="grid lg:grid-cols-4 lg:gap-8">
            {categories.map((category) => (
              <div className="pb-8 col-span-1">
                <div className="mb-8">
                  <span
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold 
                  uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    {category.name}
                  </span>
                </div>

                {/* <hr className="border-t-2 border-white/75 mt-4 md:mt-5 mb-2" /> */}
                <div
                  className="rounded-lg  bg-cover bg-center bg-no-repeat py-16 text-white"
                  style={{
                    backgroundImage: `url(${categoryImage.src})`,
                  }}
                >
                  <a href="#" className="flex items-center justify-center">
                    <button
                      className="bg-white font-semibold h-12 w-full md:w-auto px-6 rounded-lg
                    text-gray-950 inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>View Category</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CategoryCard>
      </div>
    </div>
  );
};

export default Categories;
