import { css } from '@emotion/react';

export const styles = {
  container: css`
    min-height: 100vh;
    padding: 10vh 0;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  `,
  title: css`
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
    font-size: 48px;
    flex: 1;
    display: flex;
    justify-content: center;
  `,
  partnerImageContainer: css`
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
  `
};
