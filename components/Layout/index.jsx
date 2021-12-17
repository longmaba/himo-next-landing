/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { styles } from './styles';

import { Header } from './Header';

export const Layout = ({ children }) => {
  const [isTransparentHeader, setTransparentHeader] = useState(true);

  useEffect(() => {
    document.getElementById('layout').addEventListener(
      'scroll',
      (event) => {
        setTransparentHeader(event.target.scrollTop === 0);
      },
      []
    );

    return () => document.getElementById('layout').removeEventListener('scroll', () => {});
  }, [setTransparentHeader]);

  return (
    <div id="layout" css={styles.container}>
      <Header isTransparentHeader={isTransparentHeader} />
      {children}
    </div>
  );
};
