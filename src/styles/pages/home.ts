import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 656,
})
export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductInfoWrapper = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  fontFamily: 'Roboto',
  strong: {
    fontSize: '$lg',
    color: '$gray100',
    lineHeight: 1.6,
  },

  span: {
    fontSize: '$xl',
    fontWeigt: 700,
    color: '$green300',
    lineHeight: 1.4,
  },
})

export const ProductInfoCartIcon = styled('button', {
  border: 'none',
  marginRight: '0.75rem',
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: 6,
  padding: '0.75rem',
  gap: '0.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$green500',
  color: '$white',

  cursor: 'pointer',

  transition: 150,

  '&:hover': {
    background: '$green300',
  },
})
