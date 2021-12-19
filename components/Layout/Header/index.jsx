/** @jsxImportSource @emotion/react */
import { styles } from './styles';

import { WHITEPAPER } from '../../../utils/url';

export const Header = ({ isTransparentHeader }) => {
  return (
    <div css={styles.container(isTransparentHeader)}>
      <div css={styles.menuButton}>
        <img src="/static/img/icons/menu-icon.png" alt="" />
      </div>
      <div css={styles.buttonContainer}>
        <label>HOME</label>
      </div>
      <div css={styles.buttonContainer}>
        <label>GAMEPLAY</label>
      </div>
      <div css={styles.buttonContainer}>
        <label>ECONOMY</label>
      </div>
      <div css={styles.logoContainer}>
        <img src="/static/img/logo_version_2_color.png" alt="" />
      </div>
      <div css={styles.buttonContainer}>
        <label>INVESTOR</label>
      </div>
      <div css={styles.buttonContainer}>
        <label>BLOG</label>
      </div>
      <div onClick={() => window.open(WHITEPAPER, '_blank')} css={styles.buttonContainer}>
        <label>WHITEPAPER</label>
      </div>
    </div>
  );
};
