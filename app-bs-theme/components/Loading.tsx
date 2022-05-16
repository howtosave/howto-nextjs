import * as React from 'react';
import LoadingView from './views/Loading';

type LoadingProps = {
}

export const Loading = (props: LoadingProps) => (
  <LoadingView {...props}/>
);
