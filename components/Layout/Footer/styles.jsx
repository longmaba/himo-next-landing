import { css } from '@emotion/react';

export const styles = {
  container: css`
    height: 30vh;
    border-radius: 24px 24px 0px 0px;
    background: linear-gradient(
      60deg,
      rgba(55, 75, 140, 1) 4%,
      rgba(55, 75, 140, 1) 17%,
      rgba(58, 92, 158, 1) 51%,
      rgba(59, 100, 166, 1) 66%,
      rgba(59, 100, 166, 1) 94%
    );
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 1));
    display: flex;
  `,
  logoContainer: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-family: century-gothic;

    img {
      height: 50%;
    }
  `,
  buttonContainer: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  textButton: css`
    color: #fff;
    font-family: century-gothic;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  title: css`
    color: #fff;
    font-family: century-gothic;
    font-size: 18px;
    font-weight: bold;
  `,
  mediaButtonWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    img {
      height: 35px;
      width: 35px;
      margin: 0 8px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  `
};
