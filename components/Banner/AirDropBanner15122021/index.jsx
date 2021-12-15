import React from 'react';

const TWITTER_URL = 'https://twitter.com/himoverse';
const TELEGRAM_URL = 'https://t.me/HimoWorldOfficial';
const DISCORD_URL = 'https://discord.gg/himoworld';

export const AirDropBanner15122021 = () => {
  return (
    <div className="ad-banner-15122021_container">
      <div className="ad-banner-15122021_wrapper">
        <div className="ad-banner-15122021_lootbox">
          <img src="/static/img/banner/airdrop15122021/lootbox.png" alt="" />
          <div className="ad-banner-15122021_term-button">Terms & Conditions May Apply</div>
        </div>
        <div className="ad-banner-15122021_content-wrapper">
          <img
            className="ad-banner-15122021_content-logo"
            src="/static/img/banner/airdrop15122021/logo.png"
            alt=""
          />
          <img
            className="ad-banner-15122021_content-image"
            src="/static/img/banner/airdrop15122021/content.png"
            alt=""
          />

          <div
            onClick={() => window.open(TELEGRAM_URL, '_blank')}
            className="ad-banner-15122021_button-group-mobile">
            <div className="ad-banner-15122021_button-with-icon">
              <img src="/static/img/banner/airdrop15122021/telegram.png" alt="" />
              <span>@HimoWorldOfficial</span>
            </div>
            <div
              onClick={() => window.open(TWITTER_URL, '_blank')}
              className="ad-banner-15122021_button-with-icon">
              <img src="/static/img/banner/airdrop15122021/twitter.png" alt="" />
              <span>@himoverse</span>
            </div>
            <div
              onClick={() => window.open(DISCORD_URL, '_blank')}
              className="ad-banner-15122021_button-with-icon">
              <img src="/static/img/banner/airdrop15122021/discord.png" alt="" />
              <span>@himoworld</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ad-banner-15122021_button-group">
        <div className="ad-banner-15122021_button-group-part">
          <div className="ad-banner-15122021_term-button">Terms & Conditions May Apply</div>
        </div>
        <div className="ad-banner-15122021_button-group-part">
          <div
            onClick={() => window.open(TELEGRAM_URL, '_blank')}
            className="ad-banner-15122021_button-with-icon">
            <img src="/static/img/banner/airdrop15122021/telegram.png" alt="" />
            <span>@HimoWorldOfficial</span>
          </div>
          <div
            onClick={() => window.open(TWITTER_URL, '_blank')}
            className="ad-banner-15122021_button-with-icon">
            <img src="/static/img/banner/airdrop15122021/twitter.png" alt="" />
            <span>@himoverse</span>
          </div>
          <div
            onClick={() => window.open(DISCORD_URL, '_blank')}
            className="ad-banner-15122021_button-with-icon">
            <img src="/static/img/banner/airdrop15122021/discord.png" alt="" />
            <span>@himoworld</span>
          </div>
        </div>
      </div>
    </div>
  );
};
