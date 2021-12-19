import { css } from '@emotion/react';

export const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    background-image: url('/static/img/heading/heading_background@1.png');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
  `,
  title: css`
    font-size: 48px;
    color: #fff;
    font-family: helvetica-neue-condensed;
    font-weight: bold;
    text-shadow: 1px 3px 0px #2f2e6f, -1px -1px 0px #2f2e6f, 1px -1px 0px #2f2e6f,
      -1px 1px 0px #2f2e6f, 1px 1px 0px #2f2e6f;
    margin-bottom: 16px;
    text-align: center;

    @media screen and (max-width: 360px) {
      font-size: 24px;
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      font-size: 36px;
    }
  `,
  description: css`
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-size: 22px;
    text-align: center;
    margin-bottom: 32px;

    @media screen and (max-width: 360px) {
      font-size: 14px;
      margin-bottom: 16px;
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      font-size: 16px;
    }
  `
};
