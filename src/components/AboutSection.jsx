const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4 items-start">

          {/* LEFT */}
          <div>
            <p className="inline-block px-4 py-1 border border-yellow-500 rounded-full text-sm mb-4">
              Welcome to
            </p>

            <h1 className="text-5xl font-bold mb-4">Vexpan</h1>

            <p className="text-lg font-semibold">
              We Expand Your Vision.
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-gray-600 leading-relaxed space-y-5 w-full">
            <p className="font-semibold text-gray-800">
              A trusted partner in retail expansion, we help brands grow with clarity,
              speed, and purpose—delivering strong outcomes through strategic planning,
              seamless execution, and meaningful design.
            </p>

            <p>
              At Vexpan, we transform your brand vision into fully realized retail spaces.
              From identifying the right location and crafting a winning retail strategy
              to building a strong brand identity, space design, and flawless interior fit-outs,
              we manage the entire journey end-to-end.
            </p>

            <p>
              Our expertise extends beyond setup—covering vibrant store launches and
              impactful visual merchandising that enhances customer experience and drives performance.
            </p>

            <p>
              With <strong>18+ years of hands-on retail expansion experience across India</strong>,
              we understand what it takes to build successful stores and ensure sustainable growth.
            </p>

            <p className="font-semibold text-gray-900">
              For brands ready to scale with confidence—Vexpan is your trusted partner.
            </p>
          </div>
        </div>

        {/* IMAGE (NOW INSIDE CONTAINER ✅) */}
      {/* IMAGE WITH CARDS INSIDE */}
<div className="relative mt-12 rounded-3xl overflow-hidden">

  {/* IMAGE */}
  <img
    src="https://antdisplay.com/pub/media/display_image/sushi_shop_4_.png"
    alt="about"
    className="w-full h-[400px] object-cover"
  />

  {/* 🔥 CARDS INSIDE IMAGE */}
  <div className="absolute bottom-4 left-0 w-full px-3 md:px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

      <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold">8+</h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1">
          Years of Experience
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold">20+</h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1">
          Projects Completed
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold">250+</h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1">
          Stores Delivered
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold">350+</h2>
        <p className="text-xs md:text-sm text-gray-600 mt-1">
          Happy Clients
        </p>
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default AboutSection;