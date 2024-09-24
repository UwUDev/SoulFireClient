import React, { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
}

const DynamicIcon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense
      fallback={
        <div
          className={props.className}
          style={{ backgroundColor: 'transparent', width: 24, height: 24 }}
        />
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default DynamicIcon;
