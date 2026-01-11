const AboutSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* TEXT CONTENT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Trusted Partner for Retail Store Expansion
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          <strong>Your brand has a vision.</strong> We turn that vision into a store.
        </p>

        <p className="text-gray-600 mb-4">
          From identifying the right location and retail strategy to building a
          strong brand identity, space design, and seamless interior fitouts — we
          manage the entire journey from concept to launch.
        </p>

        <p className="text-gray-600 mb-4">
          We stay with you through every step of your retail expansion journey,
          including vibrant store launches and operational visual merchandising.
        </p>

        <p className="text-gray-600 mb-6">
          Backed by experts with <strong>18+ years of hands-on retail expansion
          experience across India</strong>, we understand what builds successful
          stores and drives sustainable growth.
        </p>

        {/* TRUST BADGE */}
        <div className="inline-block mt-4 px-6 py-3 bg-black text-white font-semibold rounded">
          18+ Years of Retail Expansion Expertise
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          src="https://s.inyourpocket.com/gallery/johannesburg/2022/01/Mall%20of%20Africa%20%20Scene-001%202.jpg"
          alt="Interior Design"
          className="rounded-xl shadow-xl"
        />
      </div>

    </div>
  </section>
);

export default AboutSection;
