/** @jsxImportSource @emotion/react */
import { styles } from './styles';

const TWITTER_URL = 'https://twitter.com/himoverse';
const TELEGRAM_URL = 'https://t.me/HimoWorldOfficial';
const DISCORD_URL = 'https://discord.gg/himoworld';
const FACEBOOK_URL = 'https://www.facebook.com/himo.world';

export const Footer = () => {
  return (
    <div css={styles.container}>
      <div css={styles.logoContainer}>
        <img src="/static/img/logo_version_2_color.png" alt="" />
        <div>The official website of Hime World</div>
        <div>Copyright 2021 Himo World.</div>
        <div>All right reserved</div>
      </div>
      <div css={styles.buttonContainer}>
        <div css={styles.textButton}>Homepage</div>
        <div css={styles.textButton}>Tokenomic</div>
        <div css={styles.textButton}>Gameplay</div>
        <div css={styles.textButton}>Partners</div>
      </div>
      <div css={styles.buttonContainer}>
        <div css={styles.textButton}>Newsroom</div>
        <div css={styles.textButton}>FAQ</div>
        <div css={styles.textButton}>Support</div>
        <div css={styles.textButton}>Whitepaper</div>
      </div>
      <div css={styles.buttonContainer}>
        <div css={styles.title}>Engage with us</div>
        <div css={styles.mediaButtonWrapper}>
          <img
            onClick={() => window.open(TELEGRAM_URL, '_blank')}
            src="/static/img/media/telegram@1.png"
            alt=""
          />
          <img
            onClick={() => window.open(FACEBOOK_URL, '_blank')}
            src="/static/img/media/facebook@1.png"
            alt=""
          />
          <img
            onClick={() => window.open(TWITTER_URL, '_blank')}
            src="/static/img/media/twitter@1.png"
            alt=""
          />
          <img
            onClick={() => window.open(DISCORD_URL, '_blank')}
            src="/static/img/media/discord@1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
