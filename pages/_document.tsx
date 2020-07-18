import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <Global
            styles={css`
              body,
              html {
                margin: 0;
                padding: 0;
                font-family: 'Roboto', sans-serif;
              }
              *,
              *:before,
              *:after {
                box-sizing: border-box;
              }
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
