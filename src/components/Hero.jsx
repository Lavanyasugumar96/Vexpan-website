const Hero = () => (
  <div className="relative h-screen overflow-hidden">
    
    {/* Background image (blurred) */}
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
      style={{
        backgroundImage:
          "url('https://im.whatshot.in/img/2021/Feb/pmcv-is-1-1613025448.jpg')",
      }}
    ></div>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
        Transforming Spaces, Elevating Lives
      </h1>
      <p className="text-lg md:text-xl mb-6 text-center drop-shadow-md">
        Premium interior design solutions for your dream home or office.
      </p>
      <a
        href="/services"
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-lg font-semibold transition duration-300"
      >
        Explore Services
      </a>
    </div>

  </div>
);

export default Hero;
