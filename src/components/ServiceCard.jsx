const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-xl transition p-6 flex flex-col items-center text-center">
    <img src={image} alt={title} className="h-40 w-full object-cover rounded mb-4"/>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
