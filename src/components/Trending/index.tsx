import { TrendingArtist } from '../../types/charts/ICharts'
import { DegradeVertical, Div } from './styled'

type ITrending = {
  artist: TrendingArtist
}

function Trending({ artist }: ITrending) {

  return (
    <Div>
      <section
        style={{
          backgroundImage: `url(${artist.picture_xl})`,
        }}
      >
        <DegradeVertical>
          <p> {artist.name}</p>
        </DegradeVertical>
      </section>
    </Div>
  )
}

export default Trending
