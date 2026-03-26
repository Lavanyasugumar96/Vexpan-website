const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Vexpan?
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Vexpan empowers brands to scale their retail presence with clarity, speed, 
              and precision. From strategy to execution, we deliver end-to-end retail 
              expansion solutions focused on quality, consistency, and long-term growth.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">18+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">250+</h3>
                <p className="text-sm text-gray-600">Stores Delivered</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
                <p className="text-sm text-gray-600">Brands Served</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE (NO CARD, JUST TEXT) */}
          <div>
            <ul className="space-y-5 text-gray-700 leading-relaxed">

              <li>✔ End-to-end retail expansion—from location strategy to store launch</li>

              <li>✔ Experienced team of retail planners, designers, and execution experts</li>

              <li>✔ Strong focus on brand identity, customer experience, and store performance</li>

              <li>✔ High-quality execution with seamless interior fit-outs and detailing</li>

              <li>✔ Transparent process, clear timelines, and reliable project delivery</li>

              <li>✔ Scalable solutions for brands expanding across multiple locations</li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;