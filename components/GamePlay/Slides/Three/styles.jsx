import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    align-items: center;
    height: 70vh;
    display: flex;
  `,
  leftContent: css`
    flex: 1;
    padding-left: 58px;
    display: flex;
    align-items: center;
    height: 100%;
  `,
  description: css`
    font-size: 20px;
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  `,
  rightContent: css`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;

    img {
      height: 70%;
    }
  `
};
