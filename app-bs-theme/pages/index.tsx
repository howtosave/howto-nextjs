import Head from 'next/head';
import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LandingPageView from '~page-views/Landing';

export default function PageIndex() {
  const { t } = useTranslation('page-landing');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>        
      <LandingPageView />
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'page-landing']),
  },
});
