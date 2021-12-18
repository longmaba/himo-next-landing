/** @jsxImportSource @emotion/react */
import { styles } from './styles';

import { TELEGRAM_URL, TWITTER_URL, DISCORD_URL, FACEBOOK_URL } from '../../../utils/url';

export const StickyMenu = () => {
  return (
    <div css={styles.container}>
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
  );
};
