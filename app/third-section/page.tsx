import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex flex-col space-x-4 md:flex-row md:justify-evenly p-10">
      <div className="md:w-2/3 w-full">
        <video className="rounded-xl" autoPlay muted loop>
          <source src="/content/food.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex-col border p-6 rounded-xl md:w-1/3 ">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
          Elevate Your Restaurant Experience
        </div>
        <div className="text-lg mb-4">
          Our platform offers everything you need to manage your food business
          efficiently.
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/icon-journey.png"
              alt="Customizable Menus"
              width={50}
              height={50}
            />
            <div>Customize your menus to fit your restaurant's theme.</div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icon-journey.png"
              alt="Online Reservations"
              width={50}
              height={50}
            />
            <div>Manage online reservations effortlessly.</div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icon-journey.png"
              alt="Inventory Management"
              width={50}
              height={50}
            />
            <div>Keep track of your inventory in real-time.</div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icon-journey.png"
              alt="Loyalty Programs"
              width={50}
              height={50}
            />
            <div>Implement loyalty programs to reward your customers.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
