import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Showcase from 'components/ShowCase'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = async () => {
    // TODO
  }
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor={'secondary'}>
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions handlePayment={handlePayment} cards={cards} />
          </S.Content>
        ) : (
          <Empty
            title={'Your cart is empty'}
            description={
              'Go back to the store and explore great games and offers'
            }
            hasLink
          />
        )}

        <Divider />

        <Showcase
          title={'You may like these games'}
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}

export default Cart