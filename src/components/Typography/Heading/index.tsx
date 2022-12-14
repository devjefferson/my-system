import type * as Stitches from '@stitches/react';
import React from 'react';

import Wrapper from './styles';

type HeadingComponentProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  onContrast?: boolean;
  className?: string;
  css?: Stitches.CSS;
  id?: string;
  children: React.ReactNode;
};

export default function Heading({
  id,
  tag,
  className,
  size,
  onContrast,
  css,
  children,
  ...props
}: HeadingComponentProps) {
  return (
    <Wrapper
      id={id}
      css={css}
      as={tag}
      size={size}
      onContrast={onContrast}
      {...props}
      className={className}
    >
      {children}
    </Wrapper>
  );
}
