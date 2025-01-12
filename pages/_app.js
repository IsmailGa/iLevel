import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      fbq('init', '880165347354430'); 
      fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <Head>
        {/* Add noscript fallback for Pixel */}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=880165347354430&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}