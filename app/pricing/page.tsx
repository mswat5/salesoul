const features = [
  {
    name: "Starter",
    price: "$30/month",
    fees: "3.5% + 25¢ per transaction",
    description:
      "Perfect for small food businesses starting online. Includes basic features to set up your food ordering system.",
  },
  {
    name: "Growth",
    price: "$70/month",
    fees: "2.8% + 30¢ per transaction",
    description:
      "Designed for growing food businesses. Includes advanced features and integrations to enhance your online presence.",
  },
  {
    name: "Enterprise",
    price: "$150/month",
    fees: "2.2% + 30¢ per transaction",
    description:
      "For large food businesses with high-volume sales. Includes premium support and all advanced features.",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="
        text-4xl 
        text-center
         md:text-6xl 
         font-bold 
         bg-gradient-to-r
        from-black
         to-gray-500 
         bg-clip-text
         text-transparent md:pb-10
        "
      >
        Pricing
        <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
          Transparent and affordable pricing for your food business.
        </div>
      </div>

      <div className="md:flex">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div
              className="
                    grid
                    justify-center
                    items-center
                    gap-4
                    border
                    rounded-xl
                    p-4 
                    w-96
                    h-96
                    "
            >
              <div className="text-2xl text-black pb-4">{feature.name}</div>
              <div className="text-xl">{feature.price}</div>
              <div className="text-xl">{feature.fees}</div>
              <div className="text-xl">{feature.description}</div>

              <div className="bg-blue-500 text-white p-4 border rounded-xl items-center justify-center">
                Get Started
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
