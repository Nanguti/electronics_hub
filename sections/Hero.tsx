import promoProduct from "@/assets/products/shoe_box.png";
import promoImage from "@/assets/images/bgPromo.png";
import Image from "next/image";
import ButtonPrimary from "@/components/ButtonPrimary";

const Hero = () => {
  return (
    <div className="pt-6 pb-12 min-h-96">
      {/* <ThreeScenes /> */}
      <div className="flex flex-col gap-8">
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3 gap-2">
          {/* First Section */}
          <div
            className="flex lg:col-span-2 bg-gray-800 rounded-lg overflow-hidden relative z-0 after:z-10 
            after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 
            after:rounded-lg after:outline-white/20 after:pointer-events-none p-6 items-center justify-center"
          >
            <div className="flex flex-col gap-8 ">
              <div className="min-h-96 md:grid md:grid-cols-5 lg:grid-cols-3 gap-2">
                <div className="flex flex-col lg:col-span-2 justify-center">
                  <h1
                    className="uppercase text-3xl md:text-3xl font-extrabold tracking-widest
                    bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
                  >
                    Some content goes here, top content.
                  </h1>

                  <p className="pt-6">
                    Some nice description about the product goes here...
                  </p>

                  <div className="mt-10">
                    <ButtonPrimary text=" More About us" link="#" />
                  </div>
                </div>
                <div className="lg:col-span-1 flex items-center justify-center">
                  <Image src={promoProduct} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div
            className="lg:col-span-1 bg-cover bg-center bg-no-repeat py-16 bg-gray-800 rounded-lg overflow-hidden 
  relative z-0 flex flex-col justify-center before:absolute before:inset-0 before:bg-black before:opacity-20 
  before:z-0 after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 
  after:outline after:-outline-offset-2 after:rounded-lg after:outline-white/20 after:pointer-events-none p-6"
            style={{
              backgroundImage: `url(${promoImage.src})`,
            }}
          >
            <h1 className="text-white uppercase font-semibold relative z-10">
              Promotional message goes here...
            </h1>
            <p className="pt-6 text-sm relative z-10">
              Join the sneaker fest 2023 on 23 October. We have more fun gigs
              too and supported by FootWear!.
            </p>
            <div className="mt-10 relative z-10">
              <ButtonPrimary text="View Details" link="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
