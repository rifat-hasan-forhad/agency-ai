import assets, { company_logos } from "../assets/assets";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-center gap-2.5 border border-gray-400 w-fit px-4 py-2 rounded-4xl mx-auto mt-24 z-5 ">
        <img className="w-20" src={assets.group_profile} alt="group-image" />

        <p className="text-xs text-gray-800">Trusted by 10k+ people</p>
      </div>

      <div className="px-4">
        <h1 className="text-[2rem] font-semibold text-gray-700 text-center py-6 sm:text-7xl sm:px-15 ">
          Turning imagination into <br />
          <span className="bg-linear-to-r from-primary to-blue-400 text-transparent bg-clip-text">
            digital
          </span>{" "}
          impact.
        </h1>

        <p className="text-center text-gray-500 font-semibold sm:w-4/10 mx-auto ">
          Creating meaningful connections and turning big ideas into interactive
          digital experience.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-40 -right-80 -z-5 sm:-top-85 sm:-right-40 ">
          <img className="w-2xl sm:w-5xl" src={assets.bgImage1} alt="blue-bg" />
        </div>

        <img
          className="px-5 py-8 sm:w-5xl sm:mx-auto "
          src={assets.hero_img}
          alt="hero-imag"
        />

        <div className="absolute -bottom-55 -left-45 -z-5 sm:-bottom-100 sm:-left-50">
          <img className="w-2xl sm:w-5xl" src={assets.bgImage2} alt="" />
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-lg text-gray-600 py-10  ">
          Trusted by Leading Companies
        </h4>

        <div className=" px-6 grid grid-rows-2 grid-cols-3 gap-6 justify-items-center sm:grid-cols-6 sm:grid-rows-1 sm:gap-10 sm:w-6/10 sm:mx-auto ">
          <img className="w-20" src="../src/assets/microsoft_logo.png" alt="" />
          <img className="w-20" src="../src/assets/zoom_logo.png" alt="" />
          <img className="w-20" src="../src/assets/rakuten_logo.png" alt="" />
          <img className="w-20" src="../src/assets/coinbase_logo.png" alt="" />
          <img className="w-20" src="../src/assets/airbnb_logo.svg" alt="" />
          <img className="w-20" src="../src/assets/google_logo.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
