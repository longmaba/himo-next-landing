import React from 'react';

import { Layout } from '../components/Layout';
import { AirDropBanner15122021 } from '../components/Banner/AirDropBanner15122021';
import { GamePlay } from '../components/GamePlay';

const App = () => {
  return (
    <Layout>
      <AirDropBanner15122021 />
      <GamePlay />
    </Layout>
  );
};

export default App;
