import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '..'

export const CartContainer = styled('div', {})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: ' #00000075',
})

export const Content = styled(Dialog.Content, {
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  padding: '3rem',
  background: '$gray800',

  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  margin: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Title = styled(Dialog.Title, {
  marginTop: '1.375rem',
  marginBottom: '2rem',

  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: '$lg',
  lineHeight: 1.6,

  color: '$gray100',
})

export const Description = styled(Dialog.Description, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '1.5rem',
})

export const CloseButton = styled(Dialog.Close, {
  fontFamily: 'inherit',
  borderRadius: '100%',
  display: 'inline-flex',
  position: 'absolute',
  top: 24,
  right: 24,
  color: '$gray300',

  '&:hover': {
    background: '$rocketseat',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $rocketseat',
  },
})

export const CartProductCard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  padding: 0,
  gap: '1.5rem',
  img: {
    width: 101.94,
    height: 93,

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
  },
})

export const CartProcuctCardDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 2,
  fontFamily: 'Roboto',
  lineHeight: 1.6,

  p: {
    fontWeight: 400,
    fontSize: '$md',
    color: '$gray300',
  },
  strong: {
    fontWeight: 700,
    fontSize: '$md',
    color: '$gray100',
  },
  footer: {
    marginTop: '0.5rem',
    fontWeight: 700,
    fontSize: '$nm',
    color: '$green300',
  },
})

export const CartConfirmationSection = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})
export const CartConfirmationQtd = styled('div', {})
export const CartConfirmationTotal = styled('div', {})
