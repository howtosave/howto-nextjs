import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { withTranslation, WithTranslation } from 'react-i18next';

interface SelectLocaleViewProps extends WithTranslation {
  currentLocaleKey?: string;
  locales: {
    [key: string]: string;
  };
  onChangeLocale: (eventKey: any, event: Object) => any;
}

const SelectLocaleView = ({
  t,
  currentLocaleKey,
  locales,
  onChangeLocale,
}: SelectLocaleViewProps) => {
  return (
    <div>
      <Dropdown onSelect={onChangeLocale}>
        <Dropdown.Toggle id="select-locale-drop-down-id">
          {currentLocaleKey ? locales[currentLocaleKey] : t('select-locale.select-locale')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.keys(locales).map((e) => (
            <Dropdown.Item href={e} key={e}>{locales[e]}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default withTranslation()(SelectLocaleView);
