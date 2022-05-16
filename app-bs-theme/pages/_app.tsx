import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// See https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions#usetheme-1

export default function AppRoot({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
