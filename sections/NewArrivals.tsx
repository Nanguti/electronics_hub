import SectionHeading from "@/components/SectionHeading";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ProductCard from "@/components/ProductCard";

const NewArrivals = () => {
  return (
    <div className="py-16">
      <SectionHeading
        title="New Arrivals"
        eyebrow="Check out new Arrivals"
        description="New Arrivals in our store"
      />
      <div className="flex flex-col mt-2 md:mt-2 gap-20">
        <ProductCard
          className=" px-8 pt-8 
              md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20  sticky top-3"
        >
          <div className="grid lg:grid-cols-4 lg:gap-16">
            <div className="pb-16 col-span-1">
              <span>Product One</span>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

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

            <div className="pb-16 col-span-1">
              <span>Product Two</span>

              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

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
            <div className="pb-16 col-span-1">
              <span>Product Three</span>

              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

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
            <div className="pb-16 col-span-1">
              <span>Product Four</span>

              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

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
          </div>
        </ProductCard>
      </div>
    </div>
  );
};

export default NewArrivals;
