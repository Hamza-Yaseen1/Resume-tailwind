import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative w-full py-20 px-6 bg-customYellow">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section: Name, Subtitle, and Button */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-customBlue leading-tight tracking-wide">
            Hamza Yaseen
          </h1>
          <p className="text-xl sm:text-2xl text-customBlue opacity-80">
            Passionate Web Developer
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 mt-4 text-lg font-semibold text-black bg-white rounded-full shadow-xl transition-all duration-300 hover:bg-teal-600 hover:text-white"
          >
            Contact Us
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative w-full h-96 z-10">
          <Image
            src="/images/hamza-pic.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Optional background color or subtle pattern without overlay */}
      <div className="absolute inset-0 bg-customYellow opacity-30 pointer-events-none"></div>
    </section>
  );
}

export default HeroSection;
