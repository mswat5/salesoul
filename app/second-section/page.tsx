"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable Stays",
    description:
      "Easily customize hostel, hotel, and restaurant listings with our NFT-based platform, tailored to your needs.",
    image: "/images/icon-journey.png",
    alt: "Customizable Stays",
  },
  {
    name: "Fast Reservations",
    description:
      "Quickly book rooms or meals through our seamless NFT-powered reservation system.",
    image: "/images/icon-journey.png",
    alt: "Fast Reservations",
  },
  {
    name: "Comprehensive Integrations",
    description:
      "Integrate with various services and platforms to enhance your hostel, hotel, or restaurant's offerings.",
    image: "/images/icon-journey.png",
    alt: "Comprehensive Integrations",
  },
  {
    name: "Full Stack Support",
    description:
      "Get end-to-end solutions, from listing management to payment processing, all within our NFT ecosystem.",
    image: "/images/icon-journey.png",
    alt: "Full Stack Support",
  },
  {
    name: "Customer Loyalty",
    description:
      "Reward your loyal customers with NFTs that provide exclusive access to discounts and special offers.",
    image: "/images/icon-journey.png",
    alt: "Customer Loyalty",
  },
  {
    name: "24/7 Support",
    description:
      "Receive round-the-clock support from our team to ensure your business runs smoothly.",
    image: "/images/icon-journey.png",
    alt: "24/7 Support",
  },
];

const SecondSection = () => {
  return (
    <div>
      <div className="md:flex-row flex-col items-center flex justify-center pb-10">
        <div className="p-5 justify-center md:w-1/3">
          <div
            className="
              bg-gradient-to-r
              from-blue-800
              to-green-300
              bg-clip-text
              text-transparent
              text-4xl
              md:text-6xl
              font-bold
              pb-10
            "
          >
            Manage Your Stays & Meals with NFTs
          </div>
          <div className="text-2xl mb-8">
            Whether you're running a hostel, hotel, or restaurant, our NFT
            platform is designed to grow your business.
          </div>
          <button className="bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>

        <video className="rounded-xl md:w-2/5 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/food.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex-col items-center justify-center">
        <div
          className="
            text-3xl
            flex
            justify-center
            md:text-5xl
            font-bold
            pt-5
            pb-10
            bg-gradient-to-r
            from-purple-400
            to-blue-800
            bg-clip-text
            text-transparent
          "
        >
          Platform Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex-col space-y-6 pb-10 border
                p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
              "
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div
                    className="
                      text-2xl pb-4 bg-gradient-to-t
                      from-black
                      to-gray-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
