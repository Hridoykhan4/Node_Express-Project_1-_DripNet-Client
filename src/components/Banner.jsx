import bannerImg from '../assets/6.jpeg'
const Banner = () => {
    return (
         <div
      className="hero h-[500px] md:h-[650px] rounded-xl"
      style={{
        backgroundImage: `url(${bannerImg})`, 
      }}
    >
      <div className="bg-opacity-90 dark:bg-opacity-60"></div>
      <div className=" text-neutral-content sm:px-20">
        <div className="md:w-1/2 px-3">
          <h1 className="mb-5 text-2xl md:text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] text-black font-bold">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;