/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const SlideOne = () => {
  return (
    <div css={styles.container}>
      <div css={styles.leftContent}>
        <div css={styles.textContent}>
          <div css={styles.title}>GAMEPLAY</div>
          <div css={styles.description}>
            Play the game however you want, with hundreds of deck combination you can setup and a
            wide variety of character, each with its specialty. Discover a whole new world every
            time you setup your game plan.
          </div>
        </div>
        <img src="static/img/gameplay/heroes.png" alt="" />
      </div>
      <div css={styles.rightContent}>
        <div css={styles.moreinfoButton}>MORE INFO</div>
        <img src="static/img/gameplay/gameplay@1.png" alt="" />
      </div>
    </div>
  );
};