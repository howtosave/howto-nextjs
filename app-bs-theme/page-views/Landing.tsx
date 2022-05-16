import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';

import { Layout } from '~components/Layout';
import { SelectTheme } from '~components/SelectTheme';
import { SelectLocale } from '~components/SelectLocale';

export default function LandingPageView() {
  const { t } = useTranslation('page-landing');
  return (
    <Layout>
      <Container className="md-container">
        <Container>
          <h1>
            {t('main-title')} <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <hr/>
          <SelectTheme/>
          <SelectLocale/>
        </Container>
      </Container>
    </Layout>
  );
}
