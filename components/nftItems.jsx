import { useEffect, useRef } from "react";

export const NFTItems = (props) => {
  const wrapper = useRef();

  useEffect(() => {
    if (!props || !props.fadeInHandler || !wrapper.current) {
      return;
    }
    props.fadeInHandler(wrapper.current);
    return () => {};
  }, [props]);
  return (
    <div id="portfolio" className="text-center">
      <div className="container" ref={wrapper}>
        <div className="section-title">
          <h2>NFT Items</h2>
          <p>
            We have original/ground-breaking new NFT model. Our model only
            consists of single ERC-20 token and the rest are NFT.
          </p>
        </div>
        <div className="row">
          <img
            src="/static/img/NFTItems.png"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
