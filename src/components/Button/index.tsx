import React, { HTMLAttributeAnchorTarget } from 'react';

import IconComponent, { icons } from '../Icon';

import type * as Stitches from '@stitches/react';

import * as S from './styles';

type ButtonComponentProps = {
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

export default function Button({
  disabled = false,
  tag = 'button',
  onContrast = false,
  border = false,
  text,
  href,
  target,
  type = 'button',
  css,
  onClick,
  icon,
  link = false,
  iconSize = 21,
  iconEnd = false,
  ...props
}: ButtonComponentProps) {
  return (
    <div>
      {href ? (
        <a href={href} {...props}>
          <S.Wrapper
            as={tag}
            css={css}
            onContrast={onContrast}
            border={border}
            target={target}
            onClick={onClick}
          >
            {icon && !iconEnd && (
              <IconComponent
                name={icon}
                size={iconSize}
                className="icon-start"
              />
            )}

            <S.Text
              css={{
                fontWeight: link ? '$normal' : '$bold',
                // textTransform: link ? 'none' : 'uppercase',
              }}
            >
              {text}
            </S.Text>

            {icon && iconEnd && (
              <IconComponent name={icon} size={iconSize} className="icon-end" />
            )}
          </S.Wrapper>
        </a>
      ) : (
        <S.Wrapper
          as={tag}
          css={css}
          onContrast={onContrast}
          border={border}
          type={type}
          onClick={onClick}
          disabled={disabled}
          disabledStyled={disabled}
          {...props}
        >
          {icon && !iconEnd && (
            <IconComponent name={icon} size={iconSize} className="icon-start" />
          )}

          <S.Text>{text}</S.Text>

          {icon && iconEnd && (
            <IconComponent name={icon} size={iconSize} className="icon-end" />
          )}
        </S.Wrapper>
      )}
    </div>
  );
}
