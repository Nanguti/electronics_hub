import footerImage from "@/assets/images/footer-banner.jpg";
import ButtonPrimary from "@/components/ButtonPrimary";
const FooterBanner = () => {
  return (
    <div
      className="rounded-2xl  bg-cover bg-center 
    bg-no-repeat py-16 mb-4 text-white"
      style={{
        backgroundImage: `url(${footerImage.src})`,
      }}
    >
      <div className=" ">
        <h2 className="text-3xl text-center ">
          BRINGING YOU TO UPDATE WITH FANTASTIC FOOTWEAR
        </h2>
        <p className="mx-auto w-[80%] text-center md:w-[50%] mt-8">
          Getting amazing products, bring your A game to the club!{" "}
        </p>
        <div className="mt-10 flex items-center justify-center">
          <ButtonPrimary text="More About us" link="#" />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
