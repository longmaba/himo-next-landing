import { css } from '@emotion/react';

export const styles = {
  container: (isTransparentHeader) => css`
    width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: transparent;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    ${!isTransparentHeader &&
    `
        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.4));
        border-radius: 0px 0px 16px 16px;
        background: linear-gradient(60deg, rgba(55, 75, 140, 0.9) 4%, rgba(55, 75, 140, 0.87) 17%, rgba(58, 92, 158, 0.79) 51%, rgba(59, 100, 166, 0.69) 66%, rgba(59, 100, 166, 0.5) 94%);
    `}

    @media screen and (max-width: 1024px) {
      filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.4));
      border-radius: 0px 0px 16px 16px;
      background: linear-gradient(
        60deg,
        rgba(55, 75, 140, 0.9) 4%,
        rgba(55, 75, 140, 0.87) 17%,
        rgba(58, 92, 158, 0.79) 51%,
        rgba(59, 100, 166, 0.69) 66%,
        rgba(59, 100, 166, 0.5) 94%
      );
    }

    @media screen and (max-width: 360px) {
      height: 50px;
    }

    @media screen and (min-width: 361px) and (max-width: 425px) {
      height: 80px;
    }
  `,
  buttonContainer: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: century-gothic;
    font-weight: bold;

    label {
      color: #fff;
      font-size: 22px;
      text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
      cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  `,
  logoContainer: css`
    img {
      height: 100px;

      @media screen and (max-width: 360px) {
        height: 50px;
      }

      @media screen and (min-width: 361px) and (max-width: 425px) {
        height: 80px;
      }
    }

    @media screen and (max-width: 1024px) {
      flex: 1;
      display: flex;
      justify-content: center;
      padding-right: 100px;
    }

    @media screen and (max-width: 360px) {
      padding-right: 50px;
    }

    @media screen and (min-width: 361px) and (max-width: 425px) {
      padding-right: 80px;
    }
  `,
  menuButton: css`
    height: 100px;
    width: 100px;
    display: none;

    align-items: center;
    justify-content: center;

    img {
      height: 30px;
      width: 30px;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
    }

    @media screen and (max-width: 360px) {
      height: 50px;
      width: 50px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    @media screen and (min-width: 361px) and (max-width: 425px) {
      height: 80px;
      width: 80px;

      img {
        height: 25px;
        width: 25px;
      }
    }
  `
};
