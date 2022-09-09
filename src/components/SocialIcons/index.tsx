import React from 'react';
import IconComponent from '../Icon';
import type * as Stitches from '@stitches/react';

import * as S from './styles';

type SocialIconsComponentProps = {
  css?: Stitches.CSS;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  onContrast?: boolean;
};
export default function SocialIcons({
  facebook,
  instagram,
  twitter,
  youtube,
  css,
  onContrast,
  ...props
}: SocialIconsComponentProps) {
  return (
    <S.Wrapper css={css} {...props}>
      {facebook && (
        <S.LinkSocial href={facebook} target="_blank" onContrast={onContrast}>
          <IconComponent name="facebook" size={20} />
        </S.LinkSocial>
      )}

      {instagram && (
        <S.LinkSocial href={instagram} target="_blank" onContrast={onContrast}>
          <IconComponent name="instagram" size={20} />
        </S.LinkSocial>
      )}

      {twitter && (
        <S.LinkSocial href={twitter} target="_blank" onContrast={onContrast}>
          <IconComponent name="twitter" size={20} />
        </S.LinkSocial>
      )}

      {youtube && (
        <S.LinkSocial href={youtube} target="_blank" onContrast={onContrast}>
          <IconComponent name="youtube" size={20} />
        </S.LinkSocial>
      )}
    </S.Wrapper>
  );
}
