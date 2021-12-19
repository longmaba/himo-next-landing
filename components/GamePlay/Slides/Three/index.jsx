/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const SlideThree = () => {
  return (
    <div css={styles.container}>
      <div css={styles.leftContent}>
        <div css={styles.description}>
          When you start a match. all you have to do is connect the gemstones of the same color,
          summon a hero of the corresponding color and skill will be triggered automatically
        </div>
      </div>
      <div css={styles.rightContent}>
        {/* <img src="/static/img/gameplay/gameplay@3.png" alt="" /> */}
      </div>
    </div>
  );
};
