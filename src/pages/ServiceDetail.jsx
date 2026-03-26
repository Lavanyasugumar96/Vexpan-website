import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

const ServiceDetail = () => {
  const { id } = useParams();

  const service = servicesData.find((item) => item.id === id);

  if (!service) return <h1>Service not found</h1>;

  return (
    <div className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <img
        src={service.image}
        alt={service.image}
        className="w-full max-w-xl mx-auto rounded mb-6"
      />

      <p className="text-gray-600 max-w-2xl mx-auto">{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
