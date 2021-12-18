/** @jsxImportSource @emotion/react */
import { styles } from './styles';

import data from '../../data/data.json';

import { Member } from './Member';

export const Teams = () => {
  return (
    <div css={styles.container}>
      <div css={styles.titleContainer}>
        <div css={styles.title}>MEET OUR TEAM</div>
        <div css={styles.description}>We are a team consists of experts and core members of</div>
        <div css={styles.description}>big companies in both gaming and blockchain industry.</div>
      </div>
      <div css={styles.teamsContainer}>
        {data.Team.team.map((member, index) => {
          return <Member key={index} {...member} />;
        })}
      </div>
    </div>
  );
};
