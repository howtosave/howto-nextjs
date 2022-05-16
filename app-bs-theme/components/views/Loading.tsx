import * as React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingViewProps {
}

const LoadingView = ({
}: LoadingViewProps) => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default LoadingView;
