import React from 'react';

const TWITTER_URL = 'https://twitter.com/himoverse';
const TELEGRAM_URL = 'https://t.me/HimoWorldOfficial';
const DISCORD_URL = 'https://discord.gg/himoworld';
const GIVEAWAY_URL = 'https://gleam.io/AmmvM/himo-world';

export const AirDropBanner15122021 = () => {
  return (
    <div className="ad-banner-15122021_container">
      <div className="ad-banner-15122021_wrapper">
        <div className="ad-banner-15122021_lootbox">
          <img src="/static/img/banner/airdrop15122021/lootbox.png" alt="" />
        </div>
        <div className="ad-banner-15122021_content-wrapper">
          <img
            className="ad-banner-15122021_content-image"
            src="/static/img/banner/airdrop15122021/content.png"
            alt=""
          />
          <div
            onClick={() => window.open(GIVEAWAY_URL, '_blank')}
            className="ad-banner-15122021_enter-giveaway-banner">
            ENTER GIVEAWAY
          </div>
        </div>
      </div>
      <div className="ad-banner-15122021_button-group">
        <div className="ad-banner-15122021_button-group-part">
          <div className="ad-banner-15122021_term-button">Terms & Conditions May Apply</div>
        </div>
        <div className="ad-banner-15122021_button-group-part"></div>
      </div>
    </div>
  );
};
