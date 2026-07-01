import Heading from "./Heading";

const ServiceSection = () => {
  const services = [
    {
      src: "./src/assets/ads_icon.svg",
      title: "Advertising",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      src: "./src/assets/marketing_icon.svg",
      title: "Content marketing",
      desc: "We help you execute your plan and deliver results.",
    },
    {
      src: "./src/assets/content_icon.svg",
      title: "Content writing",
      desc: "We help you create a marketing strategy that drives results.",
    },
    {
      src: "./src/assets/social_icon.svg",
      title: "Social media",
      desc: "We help you build a strong social media presence and engage with your audience.",
    },
  ];

  return (
    <>
      <Heading
        head="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className=" sm:mx-auto sm:w-7/10 sm:grid sm:grid-cols-2 sm:grid-rows-2">
        {services.map((service) => (
          <>
            <div className="p-6 m-4 border border-gray-300 rounded-lg flex items-center gap-8 cursor-pointer sm:p-5 transition-all duration-150 hover:border-2 hover:border-blue-500 ">
              <img
                className="border-9 border-gray-200 rounded-full"
                src={service.src}
                alt="icons"
              />

              <div>
                <h2 className="text-gray-600 font-medium">{service.title}</h2>

                <p className="text-sm py-4 text-gray-500  sm:py-2">
                  {service.desc}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
