import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        {/* Video Section */}
        <div className="md:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/food.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Feature Description Section */}
        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-4xl flex justify-center text-center
              md:text-6xl
              bg-gradient-to-l
              from-yellow-300
              to-blue-300
              bg-clip-text
              font-bold
              text-transparent"
          >
            Fully Customizable eCommerce
          </div>

          <div className="md:px-20 space-y-6 flex-col items-center justify-center">
            {/* Feature 1 */}
            <div className="text-lg pt-10 flex items-center gap-4">
              <Image
                src="/images/icon-journey.png"
                alt="Store Customization"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2">
                Choose from a variety of store templates to get started. And
                customize your store to fit your brand.
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-journey.png"
                  alt="Product Management"
                  width={70}
                  height={70}
                />
                <div>
                  Add unlimited products and variations. And manage your
                  inventory with ease.
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-journey.png"
                  alt="Analytics"
                  width={70}
                  height={70}
                />
                <div>
                  Gain valuable insights into your customers and products with
                  our analytics tools.
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-journey.png"
                  alt="Security"
                  width={70}
                  height={70}
                />
                <div>
                  Best in class security to protect your data and your
                  customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
