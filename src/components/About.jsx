import { Coffee } from "lucide-react";
import image12 from "../assets/more/17.jpg";
const About = () => {
  return (
    <div className=" rounded-xl flex items-center justify-center dark:bg-gradient-to-r from-black  to-gray-900 p-6">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">
        {/* Image section */}
        <div className="md:w-1/2">
          <img
            src={image12}
            alt="About DrapCafe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <Coffee className="text-orange-600 mr-2" size={28} />
            <h2 className="text-2xl font-bold dark:text-white text-gray-800">
              About DrapCafe
            </h2>
          </div>
          <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
            At DrapCafe, we believe coffee is more than a drink — it’s a
            journey. Our passion is rooted in sourcing the finest beans,
            crafting unforgettable brews, and creating a space where every sip
            tells a story.
          </p>
          <p className="text-gray-600 dark:text-white leading-relaxed">
            Whether you're grabbing a quick espresso or settling in for a
            peaceful afternoon, DrapCafe is your cozy escape from the everyday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
