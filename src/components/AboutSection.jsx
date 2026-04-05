import logo from "../assets/VEXPAN_.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4 items-start">

          {/* LEFT */}
         <div>
  <p className="inline-block px-4 py-1 border border-yellow-500 rounded-full text-sm mb-4">
    Welcome to
  </p>

  {/* LOGO HERE */}
  <img 
    src={logo} 
    alt="Vexpan Logo" 
    className="h-12 md:h-16 w-auto mb-4"
  />
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



  

</div>
      </div>
    </section>
  );
};

export default AboutSection;