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
    font-family: helvetica-neue-condensed;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 3px 0px #2f2e6f, -1px -1px 0px #2f2e6f, 1px -1px 0px #2f2e6f,
      -1px 1px 0px #2f2e6f, 1px 1px 0px #2f2e6f;
    font-size: 48px;
    display: flex;
    justify-content: center;
    margin-bottom: 15vh;
    width: 100%;
  `
};
