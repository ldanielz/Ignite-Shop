import {
  ImageContainer,
  ProductContainer,
  ProductDetail,
} from '../../styles/pages/product'

export default function Products() {
  return (
    <>
      <ProductContainer>
        <ImageContainer></ImageContainer>
        <ProductDetail>
          <h1>Camisa X</h1>
          <span>R$ Preco</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            eum soluta qui rem eos alias reprehenderit sunt adipisci!
            Praesentium asperiores velit perferendis voluptas eveniet facere
            deleniti deserunt laborum aliquid aut.
          </p>
          <button>Comprar agora</button>
        </ProductDetail>
      </ProductContainer>
    </>
  )
}
