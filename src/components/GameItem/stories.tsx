import { Meta, Story } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: '$215.00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

Default.argTypes = {
  downloadLink: {
    type: null
  }
}

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    cardNumber: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}

WithPayment.argTypes = {
  downloadLink: {
    type: 'boolean'
  }
}
