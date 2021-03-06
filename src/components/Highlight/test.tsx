import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'
import item from './mock'
import * as S from './styles'

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...item} />)

    expect(
      screen.getByRole('heading', { name: item.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: item.subtitle })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/rdr2'
    )
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...item} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${item.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...item} floatImage={'/float-image.png'} />)

    expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align to the right by default', () => {
    const { container } = renderWithTheme(<Highlight {...item} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align to the left', () => {
    const { container } = renderWithTheme(
      <Highlight {...item} alignment={'left'} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
