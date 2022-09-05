import type * as Stitches from '@stitches/react';
import React from 'react';
declare type HeadingComponentProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    onContrast?: boolean;
    className?: string;
    css?: Stitches.CSS;
    children: React.ReactNode;
};
export default function Heading({ tag, className, size, onContrast, css, children, ...props }: HeadingComponentProps): JSX.Element;
export {};
