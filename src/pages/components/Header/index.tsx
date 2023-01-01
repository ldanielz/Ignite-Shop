import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../../assets/img/logo-ignite-shop.svg'
import { Cart } from '../Cart'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logoImage} alt="" />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}
