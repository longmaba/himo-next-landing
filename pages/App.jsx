import React from 'react';

import { Layout } from '../components/Layout';
import { AirDropBanner15122021 } from '../components/Banner/AirDropBanner15122021';
import { GamePlay } from '../components/GamePlay';
import { TokenIntroducing } from '../components/TokenIntroducing';

const App = () => {
  return (
    <Layout>
      <AirDropBanner15122021 />
      <GamePlay />
      <TokenIntroducing />
    </Layout>
  );
};

export default App;
