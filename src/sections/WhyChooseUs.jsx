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

  <br /><br />

  Backed by a team with <span className="font-semibold text-gray-900">18+ years of combined experience</span> 
  in retail expansion across India, we bring deep industry expertise and 
  practical insights to every project we undertake.
</p>

          </div>

          {/* RIGHT SIDE */}
          <div>
            <ul className="space-y-5 text-gray-700 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                End-to-end retail expansion—from strategy to store launch
              </li>

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                Experienced team of planners, designers, and execution experts
              </li>

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                Strong focus on brand identity and customer experience
              </li>

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                High-quality execution with seamless fit-outs and detailing
              </li>

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                Transparent process with clear timelines and delivery
              </li>

              <li className="flex gap-3">
                <span className="text-green-500">✔</span>
                Scalable solutions for multi-location expansion
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;