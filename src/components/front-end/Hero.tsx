const Hero = () => {
  return (
    <div className="bg-[#E3EDF6] mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">$399.0</span>
            </p>

            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              Choose Your Dream Motocycle
            </h1>

            <h3 className="text-2xl font-['Oregano',cursive]">
              Machine Guarantee offer <span className="text-red-600">5</span> Years
      
            </h3>

            <a
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div>
          <img className="ml-auto" src="/hero.jpeg" alt="hero" height="300" width="300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
