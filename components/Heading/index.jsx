/** @jsxImportSource @emotion/react */
import { styles } from './styles';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import { MailSubmitForm } from '../MailSubmitForm';
import { useMemo } from 'react';

export const Heading = () => {
  const { width } = useWindowDimensions();

  const titleBreak = useMemo(() => {
    return width < 570;
  }, [width]);

  const descriptionBreak = useMemo(() => {
    return width < 740;
  }, [width]);

  return (
    <div css={styles.container}>
      {titleBreak ? (
        <div css={styles.title}>
          <div>WELCOME TO</div>
          <div>HIMO WORLD!</div>
        </div>
      ) : (
        <div css={styles.title}>WELCOME TO HIMO WORLD!</div>
      )}

      {descriptionBreak ? (
        <div css={styles.description}>
          <div>Every champions have their own glory,</div>
          <div>every battle need decisive actions.</div>
          <div>Are you ready to start your journey? </div>
          <div>Join our mailing list to receive</div>
          <div>exclusive offers for early supporters!</div>
        </div>
      ) : (
        <div css={styles.description}>
          <div>Every champions have their own glory, every battle </div>
          <div>need decisive actions. Are you ready to start your journey? </div>
          <div>Join our mailing list to receive exclusive offers for early supporters!</div>
        </div>
      )}

      <MailSubmitForm />
    </div>
  );
};
