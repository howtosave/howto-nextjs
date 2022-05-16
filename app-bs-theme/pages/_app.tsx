import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import { SSRProvider } from 'react-bootstrap';

// See https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions#usetheme-1

function AppRoot({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </SSRProvider>
  );
}

export default appWithTranslation(AppRoot);
