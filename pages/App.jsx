import React from 'react';

import { Layout } from '../components/Layout';
import { AirDropBanner15122021 } from '../components/Banner/AirDropBanner15122021';
import { GamePlay } from '../components/GamePlay';
import { TokenIntroducing } from '../components/TokenIntroducing';
import { Teams } from '../components/Teams';
import { Partners } from '../components/Partners';
import { Roadmap } from '../components/Roadmap/index';

const App = () => {
  return (
    <Layout>
      <AirDropBanner15122021 />
      <GamePlay />
      <TokenIntroducing />
      <Teams />
      <Partners />
      <Roadmap />
    </Layout>
  );
};

export default App;
