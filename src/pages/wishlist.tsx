import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { GetStaticProps } from 'next'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'

const WishlistPage = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Wishlist
      games={games}
      recommendedGames={recommendedGames}
      recommendedHighlight={recommendedHighlight}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}

export default WishlistPage
