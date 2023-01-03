import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../assets/img/logo-ignite-shop.svg'
import { Cart } from '../Cart'
import { HeaderContainer } from '../../styles/components/header'

interface HeaderProps {
  success?: boolean
}
export function Header({ success }: HeaderProps) {
  return (
    <HeaderContainer success={success}>
      <Link href={'/'} prefetch={false}>
        <Image src={logoImage} alt="" />
      </Link>
      {success ?? <Cart />}
    </HeaderContainer>
  )
}
