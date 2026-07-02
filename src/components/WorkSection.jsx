import Heading from "./Heading";

const WorkSection = () => {
  const works = [
    {
      src: "./src/assets/work_mobile_app.png",
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      src: "./src/assets/work_dashboard_management.png",
      title: "Dashboard management",
      desc: "We help you execute your plan and deliver results.",
    },
    {
      src: "./src/assets/work_fitness_app.png",
      title: "Fitness app promotion",
      desc: "We help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <div>
      <Heading
        head={"Our latest work"}
        desc={
          "From strategy to execution, we craft digital solutions that move your business forward."
        }
      />

      <div className="sm:flex sm:w-8/10 sm:mx-auto">
        {works.map((work) => (
          <>
            <div className="p-4 transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
              <img src={work.src} alt="image" />

              <h2 className="text-gray-600 text-xl font-medium">
                {work.title}
              </h2>

              <p className="text-sm py-4 text-gray-500  sm:py-2">{work.desc}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
