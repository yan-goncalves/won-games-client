import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, {
  SlickArrowNext,
  SlickArrowPrev,
  SliderSettings
} from 'components/Slider'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <SlickArrowNext />,
  prevArrow: <SlickArrowPrev />
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard {...item} key={`gameCard-${item.title}-${index}`} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
