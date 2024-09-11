import React, { Suspense, lazy } from "react";

interface LazyLoadProps {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  importFunc,
  fallback = <div>Loading...</div>,
}) => {
  const Component = lazy(importFunc);

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
