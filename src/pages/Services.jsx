import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/servicesData";
import WhyChooseUs from "../sections/WhyChooseUs";

const Services = () => (
  <div className="py-16 bg-gray-100 min-h-screen px-4 md:px-0">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesData.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
   
      <WhyChooseUs />
  </div>
);

export default Services;