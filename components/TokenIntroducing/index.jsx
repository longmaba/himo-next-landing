/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export const TokenIntroducing = () => {
  return (
    <div css={styles.container}>
      <div css={styles.title}>
        <div css={styles.largeTitle}>INTRODUCING</div>
        <div css={styles.smallerTitle}>HIMO TOKEN</div>
      </div>
      <img src="/static/img/tokenIntroducing/token.png" alt="" />
    </div>
  );
};
