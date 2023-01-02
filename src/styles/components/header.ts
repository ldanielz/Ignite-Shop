import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  padding: '2rem 0rem',

  svg: {
    marginRight: '8.5rem',
  },
})
