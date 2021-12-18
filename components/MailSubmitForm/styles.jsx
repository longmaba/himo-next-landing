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
    width: 30vw;

    input {
      position: absolute;
      top: 0;
      left: -2px;
      border: 2px solid #2f2e6f;
      outline: none;
      padding: 8px;
      width: 23vw;
      height: 47px;
      box-sizing: border-box;
      font-family: century-gothic;
    }
  `,
  submitButton: css`
    font-size: 22px;
    font-weight: bold;
    font-family: helvetica-neue-condensed-black;
    color: #fff;
    margin-left: 16px;
    cursor: pointer;

    &:hover {
      color: #ddd;
    }
  `
};
