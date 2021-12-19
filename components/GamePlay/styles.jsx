import { css } from '@emotion/react';

export const styles = {
  container: css`
    width: 100vw;
    background-image: url('/static/img/gameplay/game_play_background@1.png');
    background-size: cover;
    box-sizing: border-box;
  `,
  titleContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px 7vw;

    @media screen and (max-width: 1024px) {
      justify-content: center;
      padding: 5vh 0;
    }

    @media screen and (max-width: 500px) {
      padding: 24px 0;
    }
  `,
  title: css`
    font-size: 48px;
    font-family: helvetica-neue-condensed;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 3px 0px #2f2e6f, -1px -1px 0px #2f2e6f, 1px -1px 0px #2f2e6f,
      -1px 1px 0px #2f2e6f, 1px 1px 0px #2f2e6f;

    @media screen and (max-width: 360px) {
      font-size: 24px;
    }

    @media screen and (min-width: 361px) and (max-width: 500px) {
      font-size: 36px;
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
    margin-right: 2vw;

    &:hover {
      color: #ddd;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  `,
  arrow: css`
    height: 6vw;
    width: 2.5vw;
    z-index: 2;

    @media screen and (max-width: 1024px) {
      display: none !important;
    }
  `,
  arrowLeft: css`
    margin-left: 2.5vw;
  `,
  arrowRight: css`
    margin-right: 2.5vw;
  `
};
