import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    display: flex;
    position: relative;
  `,
  topContent: css`
    color: #fff;
    font-family: century-gothic;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;

    @media screen and (max-width: 360px) {
      font-size: 14px;
      margin-bottom: 64px;
  `,
  bottomContent: css`
    display: flex;
    flex: 1;
    width: 100%;
  `,
  leftContent: css`
    flex: 2;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      width: 30vw;
    }

    @media screen and (max-width: 360px) {
      flex: 1;
      align-items: flex-end;
      justify-content: flex-start;

      img {
        width: 40vw;
      }
    }
  `,
  middleContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `,
  rightContent: css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 2;

    img {
      width: 30vw;
    }

    @media screen and (max-width: 360px) {
      flex: 1;
      align-items: flex-end;
      justify-content: flex-end;

      img {
        width: 40vw;
      }
    }
  `,
  description: css`
    color: #fff;
    font-size: 22px;
    font-family: century-gothic;
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
  `,
  titleContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 64px;
    margin-bottom: 20vh;
  `,
  title: css`
    font-size: 48px;
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
    margin-bottom: 32px;
  `,
  leftTitle: css`
    margin-left: -5vw;
  `,
  rightTitle: css`
    margin-right: -5vw;
  `
};
