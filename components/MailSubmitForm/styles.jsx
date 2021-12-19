import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 24px;
    background: #2f2e6f;
    position: relative;
    height: 50px;
    width: 650px;

    input {
      position: absolute;
      top: 0;
      left: -2px;
      border: 2px solid #2f2e6f;
      outline: none;
      padding: 8px;
      width: 525px;
      height: 47px;
      box-sizing: border-box;
      font-family: century-gothic;
      font-size: 18px;
    }

    @media screen and (max-width: 360px) {
      width: 260px;
      height: 30px;
      padding-right: 8px;

      input {
        width: 200px;
        height: 28px;
        font-size: 10px;
      }
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      width: 330px;
      height: 40px;
      padding-right: 8px;

      input {
        width: 252px;
        height: 38px;
        font-size: 12px;
      }
    }

    @media screen and (min-width: 501px) and (max-width: 650px) {
      width: 440px;
      height: 50px;
      padding-right: 14px;

      input {
        width: 346px;
        height: 48px;
        font-size: 14px;
      }
    }

    @media screen and (min-width: 651px) and (max-width: 1024px) {
      width: 600px;
      height: 50px;
      padding-right: 14px;

      input {
        left: -3px;
        width: 488px;
        height: 47px;
        font-size: 16px;
      }
    }
  `,
  submitButton: css`
    font-size: 22px;
    font-weight: bold;
    font-family: helvetica-neue-condensed-black;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #ddd;
    }

    @media screen and (max-width: 360px) {
      font-size: 12px;
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      font-size: 16px;
    }

    @media screen and (min-width: 501px) and (max-width: 650px) {
      font-size: 18px;
    }
  `
};
