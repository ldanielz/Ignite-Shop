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
