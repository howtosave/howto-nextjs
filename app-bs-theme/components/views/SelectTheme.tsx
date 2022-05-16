import * as React from 'react';
import { Button } from 'react-bootstrap';
import { withTranslation, WithTranslation } from 'react-i18next';

interface SelectThemeViewProps extends WithTranslation {
  currentTheme?: string;
  onClickLightMode: () => void;
  onClickDarkMode: () => void;
}

const SelectThemeView = ({
  t,
  currentTheme,
  onClickDarkMode,
  onClickLightMode,
}: SelectThemeViewProps) => {
  return (
    <div>
      <p>{t('select-theme.current-theme')} {currentTheme}</p>
      <Button variant="primary" onClick={() => onClickLightMode}>{t('select-theme.light-mode')}</Button>
      <Button variant="primary" onClick={() => onClickDarkMode}>{t('select-theme.dark-mode')}</Button>
    </div>
  );
};

export default withTranslation()(SelectThemeView);
