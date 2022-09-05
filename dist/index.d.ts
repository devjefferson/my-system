/// <reference types="react" />
import * as Stitches from '@stitches/react';
import React, { HTMLAttributeAnchorTarget } from 'react';
import * as react_icons_lib from 'react-icons/lib';

declare type HeadingComponentProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    onContrast?: boolean;
    className?: string;
    css?: Stitches.CSS;
    children: React.ReactNode;
};
declare function Heading({ tag, className, size, onContrast, css, children, ...props }: HeadingComponentProps): JSX.Element;

declare const icons: {
    chevronLeft: react_icons_lib.IconType;
    chevronRight: react_icons_lib.IconType;
    chevronDown: react_icons_lib.IconType;
    play: react_icons_lib.IconType;
    close: react_icons_lib.IconType;
    plus: react_icons_lib.IconType;
    plusCircle: react_icons_lib.IconType;
    minus: react_icons_lib.IconType;
    minusCircle: react_icons_lib.IconType;
    google: react_icons_lib.IconType;
    facebook: react_icons_lib.IconType;
    twitter: react_icons_lib.IconType;
    instagram: react_icons_lib.IconType;
    restart: react_icons_lib.IconType;
    youtube: react_icons_lib.IconType;
    arrowUp: react_icons_lib.IconType;
    whatsApp: react_icons_lib.IconType;
    alert: react_icons_lib.IconType;
    menu: react_icons_lib.IconType;
    qrCodeBorder: react_icons_lib.IconType;
    clip: react_icons_lib.IconType;
    share: react_icons_lib.IconType;
    edit: react_icons_lib.IconType;
    eyes: react_icons_lib.IconType;
    eyesSlash: react_icons_lib.IconType;
    user: react_icons_lib.IconType;
    qrcode: react_icons_lib.IconType;
    calendar: react_icons_lib.IconType;
    camera: react_icons_lib.IconType;
    search: react_icons_lib.IconType;
};

declare type ButtonComponentProps = {
    tag?: 'button' | 'a';
    disabled?: boolean;
    text: string;
    onContrast?: boolean;
    border?: boolean;
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    css?: Stitches.CSS;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    icon?: keyof typeof icons;
    iconSize?: number;
    iconEnd?: boolean;
    link?: boolean;
};
declare function Button({ disabled, tag, onContrast, border, text, href, target, type, css, onClick, icon, link, iconSize, iconEnd, ...props }: ButtonComponentProps): JSX.Element;

export { Button, Heading };
