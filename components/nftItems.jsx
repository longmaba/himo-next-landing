import Slider from 'react-slick';

export const NFTItems = (props) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
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

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>NFT Items</h2>
          <p>
            We have original/ground-breaking new NFT model. Our model only consists of single ERC-20
            token and the rest are NFT.
          </p>
        </div>
        {/* <img
            src="/static/img/NFTItems.png"
            style={{ width: "100%" }}
            alt=""
          /> */}
        <Slider {...settings}>
          <div>
            <img src="/static/img/nft_1.png" style={{ width: '100%' }} alt="" />
          </div>
          <div>
            <img src="/static/img/nft_2.png" style={{ width: '100%' }} alt="" />
          </div>
          <div>
            <img src="/static/img/nft_3.png" style={{ width: '100%' }} alt="" />
          </div>
          <div>
            <img src="/static/img/nft_2.png" style={{ width: '100%' }} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
