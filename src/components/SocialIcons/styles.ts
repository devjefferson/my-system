import { createStitches } from '@stitches/react';

const { styled } = createStitches({});

export const Wrapper = styled('div', {
  '@lgUp': {},
});

export const LinkSocial = styled('a', {
  cursor: 'pointer',
  marginRight: '$medium',
  '&:last-of-type': {
    marginRight: '0px',
  },
  color: '$brandPrimaryPure',
  '&:hover': {
    color: '$brandPrimaryMedium',
  },
  '@lgUp': {},
  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
        '&:hover': {
          color: '$neutralHighMedium',
        },
      },
      false: {
        color: '$brandPrimaryPure',
      },
    },
  },
});
