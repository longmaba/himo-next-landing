/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './styles';

import { MailSubmitForm } from '../MailSubmitForm';

export const EmailSubcription = () => {
  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <div>Subscribe now and be the first one to receive</div>
        <div>the newest information related to the game</div>
      </div>
      <div css={styles.emailSubmitContainer}>
        <MailSubmitForm />
      </div>
    </div>
  );
};
