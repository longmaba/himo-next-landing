import { css } from '@emotion/react';

export const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  titleContainer: css`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    margin-bottom: 64px;
  `,
  title: css`
    font-size: 48px;
    margin-bottom: 32px;
    text-shadow: -1px -1px 0 #2f2e6f, 1px -1px 0 #2f2e6f, -1px 1px 0 #2f2e6f, 1px 2px 0 #2f2e6f;
  `,
  description: css`
    font-size: 22px;
  `,
  teamsContainer: css`
    display: flex;
    flex-wrap: wrap;
  `
};
