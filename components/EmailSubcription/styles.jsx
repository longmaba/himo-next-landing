import { css } from '@emotion/react';

export const styles = {
  container: css`
    width: 100vw;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  description: css`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: century-gothic;
    font-weight: bold;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-size: 22px;
  `,
  emailSubmitContainer: css`
    flex: 1;
    display: flex;
    justify-content: center;
  `,
  emailSubmitForm: css`
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background: #2f2e6f;

    input {
      border: none;
      outline: none;
      padding: 8px;
      width: 25vw;
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
