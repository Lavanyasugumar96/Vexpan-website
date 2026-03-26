const steps = [
  {
    phase: "Phase 1",
    title: "Discovery & Planning",
    desc: "Understanding your brand, goals, and identifying the right retail opportunities.",
  },
  {
    phase: "Phase 2",
    title: "Strategy & Location",
    desc: "Selecting the perfect location and building a strong retail strategy.",
  },
  {
    phase: "Phase 3",
    title: "Design & Identity",
    desc: "Creating impactful store design and brand identity that attracts customers.",
  },
  {
    phase: "Phase 4",
    title: "Execution & Fitout",
    desc: "Seamless interior fit-outs with precision and quality execution.",
  },
  {
    phase: "Phase 5",
    title: "Launch & Growth",
    desc: "Store launch, visual merchandising, and continuous growth support.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How We Work
        </h2>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">

                {/* CIRCLE */}
                <div className="w-14 h-14 mx-auto rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-md z-10 relative">
                  {index + 1}
                </div>

                {/* CARD */}
                <div className="mt-6 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-yellow-600 font-semibold mb-2">
                    {step.phase}
                  </p>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;