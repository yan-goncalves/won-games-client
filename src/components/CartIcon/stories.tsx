import { Meta, Story } from '@storybook/react/types-6-0'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />

export const WithItems: Story<CartIconProps> = (args) => <CartIcon {...args} />
WithItems.args = {
  quantity: 3
}
