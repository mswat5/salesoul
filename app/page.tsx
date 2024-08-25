import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Nav from "./navbar/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Nav />
      <FirstSection />
      <Carousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Pricing />
      <FifthSection />
      <Footer />
    </>
  );
}
