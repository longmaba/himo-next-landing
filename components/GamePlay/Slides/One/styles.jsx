import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    height: 100vh;
    display: flex;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  `,
  leftContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 58px;
    height: 100%;

    img {
      width: 40vw;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    @media screen and (max-width: 1024px) {
      align-items: center;
    }
  `,
  rightContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;

    img {
      height: 60%;
    }

    @media screen and (max-width: 1024px) {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
  moreinfoButton: css`
    padding: 16px 32px;
    background: #2f2e6f;
    color: #fff;
    font-size: 22px;
    font-family: century-gothic;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 64px;
    margin-right: 7.5vw;

    &:hover {
      color: #ddd;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  `,
  textContent: css`
    margin-bottom: 64px;
  `,
  title: css`
    font-size: 48px;
    font-family: helvetica-neue-condensed;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 3px 0px #2f2e6f, -1px -1px 0px #2f2e6f, 1px -1px 0px #2f2e6f,
      -1px 1px 0px #2f2e6f, 1px 1px 0px #2f2e6f;
    margin-bottom: 32px;
  `,
  description: css`
    font-size: 20px;
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  `
};
