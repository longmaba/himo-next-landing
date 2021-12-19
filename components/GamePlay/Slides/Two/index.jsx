/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const SlideTwo = () => {
  return (
    <div css={styles.container}>
      <div css={styles.leftContent}>
        <img src="/static/img/gameplay/gameplay@2.png" alt="" />
      </div>
      <div css={styles.middleContent}>
        <div css={styles.description}>Multiple game mode for all type of players</div>
        <div css={styles.titleContainer}>
          <div css={[styles.title, styles.leftTitle]}>PvE</div>
          <div css={[styles.title, styles.rightTitle]}>PvP</div>
        </div>
      </div>
      <div css={styles.rightContent}>
        <img src="/static/img/gameplay/gameplay@3.png" alt="" />
      </div>
    </div>
  );
};
