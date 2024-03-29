import { AddShoppingCart } from '@styled-icons/material-outlined'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size={'small'}>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size={'large'}>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      fontSize: '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render with an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid={'icon'} />}>Buy now</Button>
    )
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid={'icon'} />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render with an icon in a small version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid={'icon'} />} size={'small'}>
        Buy now
      </Button>
    )
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle({
      width: '1.5rem'
    })
  })

  it('should render with an icon in a medium version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid={'icon'} />}>Buy now</Button>
    )
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle({
      width: '2rem'
    })
  })

  it('should render with an icon in a large version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid={'icon'} />} size={'large'}>
        Buy now
      </Button>
    )
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle({
      width: '2.5rem'
    })
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as={'a'} href={'/link'}>
        Buy now
      </Button>
    )

    // imprime na tela toda a estrutura do componente
    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
