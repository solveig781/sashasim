/* eslint-disable react/no-danger, no-param-reassign, react/jsx-props-no-spreading */

import React from 'react';
import { merge } from 'ramda';
import Document, { Head, Main, NextScript } from 'next/document';

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

// Load all of our environment first
// eslint-disable-next-line
require('dotenv').config();

function googleAnalytics() {
  // TODO: Add google analytics
  // eslint-disable-next-line no-underscore-dangle
  const __html = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date()); gtag('config', '');
  gtag('config', 'GA_MEASUREMENT_ID', { 'app_name': 'YOUR_APP_NAME' });`;

  return { __html };
}

/**
 * Adds the server style sheet for styled-components
 * Should be called in getInitialProps of your nextjs page or _document
 */
async function computeStyles(context) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = context.renderPage;

  try {
    // We'll use styled-components to collect all styles generated
    // by any child components underneathe the app
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    // Ensure that we don't accidentally override our original document props
    const initialProps = await Document.getInitialProps(context);

    return merge(initialProps)({
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    });
  } finally {
    sheet.seal();
  }
}

export default class DefaultDocument extends Document {
  static async getInitialProps(context) {
    const computedStyles = await computeStyles(context);

    return merge(computedStyles)({
      hostName: process.browser ? '/' : `https://${context.req.headers.host}/`,
    });
  }

  render() {
    const pageTitle = 'Aleksandra Sokolova';
    const pageDescription = 'Homepage and portfolio of Aleksandra Sokolova.';

    const { hostName } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:url" content={hostName} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={`${hostName}thumbnail.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          {/* For humans */}
          <link type="text/plain" rel="author" href="/humans.txt" />
          {/* Output the styles (styled-components) in the head  */}
          {this.props.styleTags}
          {/* Insert our favicon */}
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-156958174-1"
          />
          <script dangerouslySetInnerHTML={googleAnalytics()} />
          {/* Nicer fonts */}
          <link
            async
            href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Comfortaa:wght@300&family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link
            async
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link
            async
            href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
          <title>{pageTitle}</title>
        </body>
      </html>
    );
  }
}
