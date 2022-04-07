import { Link } from 'react-router-dom'
import { TrendingArtist } from '../../types/charts/ICharts'
import { DegradeVertical, Div } from './styled'

type ITrending = {
  artist: TrendingArtist
}

function Trending({ artist }: ITrending) {
  return (
    <Div>
      <Link to={`/detailsArtist/${artist.id}/${artist.name}`} className="link">
        <section
          style={{
            backgroundImage: `url(${artist.picture_xl})`,
          }}
        >
          <DegradeVertical>
            <p> {artist.name}</p>
          </DegradeVertical>
        </section>
      </Link>
    </Div>
  )
}

export default Trending
