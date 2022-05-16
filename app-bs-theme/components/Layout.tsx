import * as React from 'react';
import LayoutView from './views/Layout';

type LayoutProps = {
  children: JSX.Element,
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <LayoutView {...props} >
      {children}
    </LayoutView>
  );
};
