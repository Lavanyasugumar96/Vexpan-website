import client1 from "../assets/assets_1.png";
import client2 from "../assets/asset_2.png";

const Clients = () => {
  return (
    <section className="py-16 bg-white text-center border-t">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">
        Trusted by our clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white h-80  p-6 rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-center">
          <img
            src={client1}
            alt="Client 1"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white h-80 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-center">
          <img
            src={client2}
            alt="Client 2"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
