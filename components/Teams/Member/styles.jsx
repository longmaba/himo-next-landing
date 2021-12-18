import { css } from '@emotion/react';

export const styles = {
  container: css`
    width: calc(100vw / 4);
    height: calc(100vh / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      height: 60%;
      border-radius: 50%;
    }
  `,
  name: css`
    font-size: 24px;
    color: #fff;
    font-family: century-gothic;
    font-weight: bold;
    margin: 8px 0;
  `,
  job: css`
    font-size: 18px;
    color: #fff;
    font-family: century-gothic;
  `
};
