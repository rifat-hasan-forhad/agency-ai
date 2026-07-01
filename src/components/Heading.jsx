const Heading = ({ head, desc }) => {
  return (
    <div>
      <h1 className="text-[2rem] font-medium text-gray-700 text-center py-6 mt-25 sm:text-5xl sm:px-15 ">
        {head}
      </h1>

      <p className="text-center text-gray-500 font-semibold px-2 pt-3 pb-15 sm:w-4/10 mx-auto ">
        {desc}
      </p>
    </div>
  );
};

export default Heading;
