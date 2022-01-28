import { TrendingArtist } from '../../types/ICharts'
import { DegradeVertical, Div } from './styled'

type ITrending = {
  artist: TrendingArtist
}

function Trending({ artist }: ITrending) {

  return (
    <Div>
      <section
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${artist.picture_medium})`,
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
