import * as React from 'react';
import { useTheme } from 'next-themes';
import SelectThemeView from './views/SelectTheme';

type SelectThemeProps = {
}

export const SelectTheme = (props: SelectThemeProps) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  
  // to fix server render mismatch issue
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <SelectThemeView
    currentTheme={theme}
    onClickDarkMode={() => setTheme('dark')}
    onClickLightMode={() => setTheme('light')}
  />;
};
