import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={mockItems} total={'$330.00'} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('$330.00')).toHaveStyle({ color: '#F231A5' })
    expect(screen.getByText('Total:')).toBeInTheDocument()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total={'$330.00'} hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total:/i)).not.toBeInTheDocument()
  })
})
