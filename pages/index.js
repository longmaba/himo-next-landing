import Head from 'next/head';
// import Script from 'next/script';
import App from './App';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/static/img/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/img/apple-touch-icon-72x72.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/img/apple-touch-icon-114x114.png"
        />

        {/* <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/nivo-lightbox/nivo-lightbox.css" />
        <link rel="stylesheet" type="text/css" href="/static/css/nivo-lightbox/default.css" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/fonts/font-awesome/css/all.css" />
        <link rel="stylesheet" href="/static/fonts/font-awesome/css/v4-shims.css" />
        <link
          rel="preload"
          href="/static/fonts/fonts/helvetica-neue-condensed-black.tff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/fonts/century-gothic/century-gothic-medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/fonts/century-gothic/century-gothic-bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/fonts/century-gothic/century-gothic-italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/fonts/century-gothic/century-gothic-bold-italic.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Himo World</title>
        <meta name="description" content="" />
      </Head>
      <App />
      {/* <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
       
        <Script type="text/javascript" src="/static/js/jquery.1.11.1.js"></Script>
        <Script type="text/javascript" src="/static/js/bootstrap.js"></Script>
      </body> */}
    </div>
  );
}
