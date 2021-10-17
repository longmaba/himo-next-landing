import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import '../styles/App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
