import Image from "next/image";

const features = [
  {
    name: "Customizable Menus",
    description:
      "Choose from a variety of pre-designed food menus or create your own to match your restaurant's theme and cuisine.",
    image: "/images/icon-journey.png",
    alt: "Customizable Menus",
    color: "blue",
  },
  {
    name: "Fast Ordering",
    description:
      "Streamline your customers' ordering experience with quick and efficient online ordering and payment options.",
    image: "/images/icon-journey.png",
    alt: "Fast Ordering",
  },
  {
    name: "Online Reservations",
    description:
      "Allow customers to book tables and make reservations online with ease, helping you manage your restaurant better.",
    image: "/images/icon-journey.png",
    alt: "Online Reservations",
  },
  {
    name: "Inventory Management",
    description:
      "Track your inventory and manage stock levels efficiently to ensure you never run out of key ingredients.",
    image: "/images/icon-journey.png",
    alt: "Inventory Management",
  },
  {
    name: "Loyalty Programs",
    description:
      "Set up loyalty rewards to encourage repeat customers and increase customer retention.",
    image: "/images/icon-journey.png",
    alt: "Loyalty Programs",
  },
  {
    name: "24/7 Support",
    description:
      "Get around-the-clock support to address any issues and ensure smooth operation of your online food ordering system.",
    image: "/images/icon-journey.png",
    alt: "24/7 Support",
  },
];

const SecondSection = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-between items-center pb-10">
        <div className="p-5 md:w-1/2">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent pb-10">
            From cafe to fine dining, our platform caters to every food
            business.
          </div>
          <div className="text-lg md:text-xl mb-8">
            Whether you&apos;re running a small cafe or a high-end restaurant,
            our platform provides everything you need to manage your food
            business online.
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Get Started
          </button>
        </div>

        <video className="rounded-xl md:w-1/2" autoPlay muted loop>
          <source src="/content/food.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="text-center py-10">
        <div className="text-3xl md:text-5xl mb-4 font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Key Features for Food Businesses
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-gray-600 text-3xl mb-4">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
              </div>
              <div className="text-2xl font-bold mb-2">{feature.name}</div>
              <div className="text-lg">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
