/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './styles';

export const MailSubmitForm = () => {
  const [email, setEmail] = useState('');
  return (
    <div css={styles.container}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="TYPE YOUR EMAIL HERE..."
      />

      <div css={styles.submitButton}>SUBSCRIBE</div>
    </div>
  );
};
