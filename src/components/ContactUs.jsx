import assets from "../assets/assets";
import Heading from "./Heading";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 text-gray-700"
    >
      <Heading
        head={"Reach out to us"}
        desc={
          "Ready to grow your brand? Let's connect and build something exceptional together."
        }
      />

      <form className="grid sm:grid-cols-2 gap-3 px-4 sm:gap-5 max-w-2xl w-full">
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300">
            <img src={assets.person_icon} alt="" />
            <input
              className="w-full p-3 text-sm outline-none"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300">
            <img src={assets.email_icon} alt="" />
            <input
              className="w-full p-3 text-sm outline-none"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300"
            rows={8}
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <img className="w-4" src={assets.arrow_icon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
