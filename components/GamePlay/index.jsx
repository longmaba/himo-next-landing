/** @jsxImportSource @emotion/react */
import Slider from 'react-slick';

import { SlideOne } from './Slides/One';
import { SlideTwo } from './Slides/Two';
import { SlideThree } from './Slides/Three';

import { styles } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // adaptiveHeight: true,
  // autoplay: false,
  // autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  style: {
    flex: 1
  }
};

export const GamePlay = () => {
  return (
    <div css={styles.container}>
      <div css={styles.titleContainer}>
        <div css={styles.title}>GAMEPLAY</div>
        <div css={styles.moreinfoButton}>MOREINFO</div>
      </div>
      <Slider
        {...settings}
        prevArrow={
          <img
            css={[styles.arrow, styles.arrowLeft]}
            src="/static/img/gameplay/previous_arrow.png"
            alt=""
          />
        }
        nextArrow={
          <img
            css={[styles.arrow, styles.arrowRight]}
            src="/static/img/gameplay/next_arrow.png"
            alt=""
          />
        }>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Slider>
    </div>
  );
};
