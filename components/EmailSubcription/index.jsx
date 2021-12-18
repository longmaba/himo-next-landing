/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './styles';

export const EmailSubcription = () => {
  const [email, setEmail] = useState('');
  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <div>Subscribe now and be the first one to receive</div>
        <div>the newest information related to the game</div>
      </div>
      <div css={styles.emailSubmitContainer}>
        <div css={styles.emailSubmitForm}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="TYPE YOUR EMAIL HERE..."
          />

          <div css={styles.submitButton}>SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
};
