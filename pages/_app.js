/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import App from 'next/app';

import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`
  html {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    overflow-x: hidden;

    color: black;
    background: white;
    font-family: 'Comfortaa', sans-serif;
  }
`;

function AppWrapper({ Component, pageProps, user }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyling />
    </>
  );
}

// Force server rendering on all pages
//
// The reasoning for this is that we use a custom ASSET_PREFIX
// We set this in the server/index.js
//
// https://github.com/zeit/next.js/issues/9496#issuecomment-570423649
// If we allow next.js to apply static optimisation it will do so without
// this dynamic prefix, which means that the app will break in weird ways.
//
// We don't want to set the ASSET_PREFIX at compile time because this means
// our docker container can't be used on multiple different servers.
AppWrapper.getInitialProps = App.getInitialProps;

export default AppWrapper;
