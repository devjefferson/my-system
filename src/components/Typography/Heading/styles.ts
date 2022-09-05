import { styled } from '@stitches/react';

const Wrapper = styled('h1', {
  fontWeight: '$bold',
  lineHeight: '$tight',
  textTransform: 'uppercase',

  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
      },
      false: {
        color: '$brandPrimaryPure',
      },
    },
    size: {
      xsmall: {
        fontSize: '$xsmall',
        '@lgUp': {
          fontSize: '$small',
        },
      },
      small: {
        fontSize: '$small',
        '@lgUp': {
          fontSize: '$large',
        },
      },
      medium: {
        fontSize: '$medium',
        '@lgUp': {
          fontSize: '$xlarge',
        },
      },
      large: {
        fontSize: '$large',
        '@lgUp': {
          fontSize: '$xxlarge',
        },
      },
      xlarge: {
        fontSize: '$xlarge',
        '@lgUp': {
          fontSize: '$huge',
        },
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
