/** @jsxImportSource @emotion/react */
import { styles } from './styles';

import data from '../../data/data.json';

import { Partner } from './Partner';

export const Partners = () => {
  return (
    <div css={styles.container}>
      <div css={styles.title}>PARTNERS</div>
      <div css={styles.partnerImageContainer}>
        {data.Gallery.map((item, index) => {
          return <Partner key={index} img={item.largeImage} />;
        })}
      </div>
    </div>
  );
};
