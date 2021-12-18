import { css } from '@emotion/react';

export const styles = {
  container: css`
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 30vh;
    right: 0;
    background: #2f2e6f;
    border-radius: 24px 0px 0px 24px;
    width: 50px;
    padding: 16px 4px;

    img {
      height: 35px;
      width: 35px;
      margin: 4px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  `
};
