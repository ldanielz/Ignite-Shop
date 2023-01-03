import { keyframes, styled } from '..'

export const CardHoverAnimation = keyframes({
  '0%': {
    zIndex: 1,
    transform: 'scale(1)',
  },
  '100%': {
    zIndex: 10,
    transform: 'scale(2)',
  },
})

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },

  '@bp4': {
    height: 'calc(100vh - 120px)',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ImageListContainer = styled('div', {
  width: '100%',
  marginBottom: '3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  flexFlow: 'wrap',
})

export const ImageListItem = styled('div', {
  position: 'relative',
  width: '7.75rem',
  height: '7.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,

  margin: '0 -1.5rem',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    zIndex: 10,
    transform: 'translate(0, -2rem)',
  },

  span: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 12,
    bottom: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    borderRadius: '50%',
    border: '3px solid $gray900',
    background: '$green300',

    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.6,
    color: '$white',
  },
})
