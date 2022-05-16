import * as React from 'react';
import { useRouter } from 'next/router';
import SelectLocaleView from './views/SelectLocale';

const locales = {
  'en': 'English',
  'ko': '한글',
};

type SelectLocaleProps = {
}

export const SelectLocale = (props: SelectLocaleProps) => {
  const router = useRouter();
  
  function onChangeLocale(key: any, event: Object) {
    console.log('>>>>>>>>>>>>>>>>>>> KEY:', key);
  }

  return <SelectLocaleView
    currentLocaleKey={router.locale}
    locales={locales}
    onChangeLocale={onChangeLocale}
  />;
};
