import * as React from 'react';
import { useTheme } from 'next-themes';

interface SelectThemeProps {
}

export const SelectTheme = (props: SelectThemeProps) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  
  // to fix server render mismatch issue
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};
