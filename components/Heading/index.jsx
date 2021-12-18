/** @jsxImportSource @emotion/react */
import { styles } from './styles';

import { MailSubmitForm } from '../MailSubmitForm';

export const Heading = () => {
  return (
    <div css={styles.container}>
      <div css={styles.title}>WELCOME TO HIMO WORLD!</div>
      <div css={styles.description}>
        <div>Every champions have their own glory, every battle </div>
        <div>need decisive actions. Are you ready to start your journey? </div>
        <div>Join our mailing list to receive exclusive offers for early supporters!</div>
      </div>
      <MailSubmitForm />
    </div>
  );
};
