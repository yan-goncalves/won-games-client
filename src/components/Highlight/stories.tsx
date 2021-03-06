import { Meta, Story } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item, alignment: 'right' },
  argTypes: {
    floatImage: {
      type: null
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
