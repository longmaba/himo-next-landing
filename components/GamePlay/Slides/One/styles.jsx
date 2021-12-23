import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    display: flex;
    height: 100%;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  `,
  leftContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 7vw;
    height: 100%;

    img {
      width: 40vw;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    @media screen and (max-width: 1024px) {
      align-items: center;
      padding-left: 0;
      flex: 0;
    }
  `,
  rightContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;

    background-image: url(static/img/gameplay/gameplay@1.png);
    background-position: center;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-size: contain;

    img {
      width: 70%;
      display: none;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    @media screen and (max-width: 1024px) {
      background-image: url(static/img/gameplay/gameplay@1.png);
      background-position: center;
      background-position-y: bottom;
      background-repeat: no-repeat;
      background-size: contain;
    }
  `,
  textContent: css`
    margin-bottom: 64px;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }

    @media screen and (max-width: 500px) {
      margin-bottom: 16px;
    }
  `,
  description: css`
    font-size: 20px;
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    @media screen and (max-width: 360px) {
      font-size: 14px;
      padding: 0 16px;
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      font-size: 16px;
      padding: 0 16px;
    }

    @media screen and (min-width: 501px) and (max-width: 1024px) {
      width: 70vw;
    }
  `
};
