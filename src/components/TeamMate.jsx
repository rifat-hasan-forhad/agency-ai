import { teamData } from "../assets/assets";
import Heading from "./Heading";

const TeamMate = () => {
  return (
    <div>
      <Heading
        head={"Meet the team"}
        desc={
          "A passionate team of digital experts dedicated to your brands success."
        }
      />

      <div className="p-4 grid grid-cols-2 sm:w-8/10 sm:mx-auto md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((person) => (
          <>
            <div className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 bg-white shadow-xl shadow-gray-100 hover:scale-103 transition-all duration-400">
              <img
                className="w-12 h-12 rounded-full"
                src={person.image}
                alt=""
              />

              <div className="flex-1">
                <h2 className="font-bold text-sm">{person.name}</h2>

                <p className="text-xs opacity-60">{person.title}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TeamMate;
