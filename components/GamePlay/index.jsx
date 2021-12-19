/** @jsxImportSource @emotion/react */
import Slider from 'react-slick';

import { SlideOne } from './Slides/One';
import { SlideTwo } from './Slides/Two';
import { SlideThree } from './Slides/Three';

import { styles } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  // autoplay: false,
  // autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  style: { margin: '16px 35px' }
};

export const GamePlay = () => {
  return (
    <div css={styles.container}>
      <Slider
        {...settings}
        prevArrow={<img src="/static/img/gameplay/previous_arrow.png" alt="" />}
        nextArrow={<img src="/static/img/gameplay/next_arrow.png" alt="" />}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Slider>
    </div>
  );
};
