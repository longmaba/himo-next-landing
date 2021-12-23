/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useState } from 'react';
import { styles } from './styles';

import { useWindowDimensions } from '../../../../hooks/useWindowDimensions';

export const SlideTwo = () => {
  const { width } = useWindowDimensions();

  const isBreakPoint = useMemo(() => {
    return width <= 1024;
  }, [width]);

  return (
    <div css={styles.container}>
      <div css={styles.topContent}>
        <div>Multiple game mode for</div>
        <div>all type of players</div>
      </div>
      <div css={styles.bottomContent}>
        <div css={styles.leftContent}>
          <img
            src={
              isBreakPoint
                ? '/static/img/gameplay/gameplay@4.png'
                : '/static/img/gameplay/gameplay@2.png'
            }
            alt=""
          />
        </div>
        {/* <div css={styles.middleContent}>
        <div css={styles.description}>Multiple game mode for all type of players</div>
        <div css={styles.titleContainer}>
          <div css={[styles.title, styles.leftTitle]}>PvE</div>
          <div css={[styles.title, styles.rightTitle]}>PvP</div>
        </div>
      </div> */}
        <div css={styles.rightContent}>
          <img
            src={
              isBreakPoint
                ? '/static/img/gameplay/gameplay@5.png'
                : '/static/img/gameplay/gameplay@3.png'
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
