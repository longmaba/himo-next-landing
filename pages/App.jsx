import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
// import SmoothScroll from 'smooth-scroll';
import { NFTItems } from "../components/nftItems";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const fadeInHandler = (element) => {
    if (!element) {
      return;
    }
    element.style.opacity = 0;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= element.offsetTop) {
        if (element.style.opacity < 1) {
          element.style.opacity = parseFloat(element.style.opacity) + 0.01;
        }
      }
    });
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <div className="background-overlay">
        <About data={landingPageData.About} fadeInHandler={fadeInHandler} />
        <Features
          data={landingPageData.Features}
          fadeInHandler={fadeInHandler}
        />
        <NFTItems fadeInHandler={fadeInHandler} />
        <Services
          data={landingPageData.Services}
          fadeInHandler={fadeInHandler}
        />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Team data={landingPageData.Team} fadeInHandler={fadeInHandler} />
      </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
