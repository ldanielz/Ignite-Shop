import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
import camiseta3 from '../assets/shirts/3.png'
import camiseta4 from '../assets/shirts/4.png'
import camiseta5 from '../assets/shirts/5.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="Camiseta 1" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="Camiseta 2" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="Camiseta 3" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} alt="Camiseta 4" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 50.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta5} alt="Camiseta 5" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 50.00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
