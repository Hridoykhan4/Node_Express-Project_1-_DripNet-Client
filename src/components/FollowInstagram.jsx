import rec1 from "../assets/cups/Rectangle 9.png";
import rec2 from "../assets/cups/Rectangle 10.png";
import rec3 from "../assets/cups/Rectangle 11.png";
import rec4 from "../assets/cups/Rectangle 12.png";
import rec5 from "../assets/cups/Rectangle 13.png";
import rec6 from "../assets/cups/Rectangle 14.png";
import rec7 from "../assets/cups/Rectangle 15.png";
import rec8 from "../assets/cups/Rectangle 16.png";
const FollowInstagram = () => {
  const images = [rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8];
  return (
    <section className="py-10 px-4 text-center">
      <p className="text-sm text-[#d6c8c2]">Follow Us Now</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#c9b0a4] my-2">
        Follow on Instagram
      </h2>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Coffee ${index + 1}`}
            className="w-full  object-cover rounded-lg shadow-sm"
          />
        ))}
      </div>
    </section>
  );
};

export default FollowInstagram;
