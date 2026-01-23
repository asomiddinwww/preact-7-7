import { useState } from "react";
import flav1 from "../../../img/flav1.png";
import flav2 from "../../../img/flav2.png";

const Showcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      subTitle: "Welcome to Greenshop",
      title: "Let's Make a",
      titleGreen: "Better Planet",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      buttonText: "SHOP NOW",
    },
  ];

  return (
    <section className="w-full mt-3 sm:mt-6 rounded-none sm:rounded-sm overflow-hidden">
      <div className="w-[90%] m-auto bg-[#F5F5F5]/50 px-4 sm:px-10 py-8 sm:py-12 lg:py-24 flex flex-col md:flex-row items-center relative">
        <div className="flex-1 z-10 text-center md:text-left order-2 md:order-1 mt-8 md:mt-0">
          <h3 className="text-[#3D3D3D] text-[11px] sm:text-base font-medium uppercase tracking-[0.1em] mb-2 sm:mb-4">
            {slides[0].subTitle}
          </h3>

          <h1 className="text-[#3D3D3D] text-[28px] leading-[35px] min-[280px]:text-[32px] sm:text-5xl lg:text-[70px] font-black uppercase lg:leading-[70px] mb-2 sm:mb-4">
            {slides[0].title} <br className="hidden sm:block" />
            <span className="text-[#46A358]">{slides[0].titleGreen}</span>
          </h1>

          <p className="text-[#727272] text-[12px] sm:text-sm leading-[20px] sm:leading-6 max-w-[560px] mb-6 sm:mb-10 mx-auto md:mx-0 px-2 min-[280px]:px-0">
            {slides[0].description}
          </p>

          <button
            onClick={() => console.log("Shopping started...")}
            className="bg-[#46A358] hover:bg-[#3d8b4c] text-white text-[12px] sm:text-base font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 uppercase shadow-md active:scale-95"
          >
            {slides[0].buttonText}
          </button>
        </div>

        <div className="flex-1 relative flex justify-center items-center order-1 md:order-2 w-full">
          <div className="relative w-[200px] min-[280px]:w-[240px] sm:w-[350px] lg:w-[450px]">
            <img
              src={flav1}
              alt="Big Plant"
              className="w-full h-auto object-contain relative z-10"
            />
            <img
              src={flav2}
              alt="Small Plant"
              className="absolute bottom-7 left-0 w-[35%] h-auto object-contain z-20 hidden min-[320px]:block"
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveSlide(0)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === 0 && dot === 0
                  ? "bg-[#46A358]"
                  : "bg-[#46A358]/30 hover:bg-[#46A358]/60"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
