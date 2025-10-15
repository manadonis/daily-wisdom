import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <meta name="description" content="Daily wisdom from influential figures who have positively impacted humanity. One carefully curated quote each day." />
        <meta name="theme-color" content="#1a1a1a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if(window.location && window.location.search && window.location.search.indexOf('capture-sitebehaviour-heatmap') !== -1) {
                    sessionStorage.setItem('capture-sitebehaviour-heatmap', '_');
                  }
                  var sbSiteSecret = '89565915-bb72-4b7a-bb02-8f0a449ee7cf';
                  window.sitebehaviourTrackingSecret = sbSiteSecret;
                  var scriptElement = document.createElement('script');
                  scriptElement.defer = true;
                  scriptElement.id = 'site-behaviour-script-v2';
                  scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                  document.head.appendChild(scriptElement); 
                }
                catch (e) {console.error(e)}
              })()
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

