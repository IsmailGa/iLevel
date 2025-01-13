import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

interface FacebookPixelEvents {
  track(event: string, data?: Record<string, unknown>): void;
  trackCustom(event: string, data?: Record<string, unknown>): void;
  init(pixelId: string, data?: Record<string, unknown>): void;
}

declare global {
  interface Window {
    fbq: FacebookPixelEvents;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Handle route changes
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq.track('PageView');
      }
    };

    // Track initial page load
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq.track('PageView');
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}