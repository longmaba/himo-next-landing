import { css } from '@emotion/react';

export const styles = {
  container: css`
    width: 100vw;
    box-sizing: border-box;

    img {
      width: 100%;
    }
  `,
  title: css`
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
    font-size: 48px;
    display: flex;
    justify-content: center;
    margin-bottom: 15vh;
    width: 100%;
  `
};
