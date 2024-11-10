
function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-customYellow text-customBlue py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">About Us</h1>
          <p className="mt-4 text-xl sm:text-2xl opacity-80">
            We are a team of passionate professionals dedicated to making an impact.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-600">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            We are committed to creating meaningful digital experiences that empower individuals and businesses to achieve their full potential. Our team of designers, developers, and strategists work collaboratively to craft innovative solutions that make a lasting impact.
          </p>
        </div>
      </section>
      <section id="contact" className="py-16 bg-customBlue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl opacity-80 mb-8">We are here to help Contact us for any inquiries or projects.</p>
          <a
            href="mailto:info@yourdomain.com"
            className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-xl transition-all duration-300 hover:bg-blue-800 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
