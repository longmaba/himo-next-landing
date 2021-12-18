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
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  style: { margin: '16px 35px' },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        slidesToShow: 1
      }
    }
  ]
};

export const GamePlay = () => {
  return (
    <div css={styles.container}>
      <Slider {...settings}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Slider>
    </div>
  );
};
