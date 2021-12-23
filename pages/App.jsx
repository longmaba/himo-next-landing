import { useState, useEffect } from 'react';
import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { Features } from '../components/features';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Gallery } from '../components/gallery';
import { Testimonials } from '../components/testimonials';
import { Team } from '../components/Team';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';
// import SmoothScroll from 'smooth-scroll';
import { NFTItems } from '../components/nftItems';
import { RoadMap } from '../components/roadmap';
// import { AirDropBanner15122021 } from '../components/Banner/AirDropBanner15122021';

import { Layout } from '../components/Layout';
import { AirDropBanner15122021 } from '../components/Banner/AirDropBanner15122021';
import { GamePlay } from '../components/GamePlay';
import { TokenIntroducing } from '../components/TokenIntroducing';
import { Teams } from '../components/Teams';
import { Partners } from '../components/Partners';
import { Roadmap } from '../components/Roadmap/index';
import { EmailSubcription } from '../components/EmailSubcription';

const App = () => {
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />

      {/* <AirDropBanner15122021 /> */}
      <div className="background-overlay">
        <About data={landingPageData.About} />
        <Features data={landingPageData.Features} />
        <NFTItems />
        <Services data={landingPageData.Services} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Team data={landingPageData.Team} />
        <Gallery data={landingPageData.Gallery} />
        <RoadMap />
      </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
