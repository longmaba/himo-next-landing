import { css } from '@emotion/react';

export const styles = {
  container: css`
    position: relative;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background-image: url('/static/img/tokenIntroducing/token_introducing_background@1.png');
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 77%;
    }
  `,
  title: css`
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
    margin-bottom: 32px;
    position: absolute;
    top: 20vh;
    left: 14.7vw;
  `,
  largeTitle: css`
    font-size: 48px;
  `,
  smallerTitle: css`
    font-size: 32px;
  `
};
