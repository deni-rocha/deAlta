import { useContext } from 'react'

import ChartsContext from '../../context/chartsContext'
import { Div, DivDegrade} from './styled'
import ListArtists from '../ChartList/Artists'
import ListAlbums from '../ChartList/Albums'
import Trending from '../Trending'
import Footer from '../Footer'

const Main = () => {
  const { dataCharts } = useContext(ChartsContext)
  const trendingArtist = dataCharts.trendingArtist
  const chartArtists = dataCharts.artists
  const chartAlbums = dataCharts.albums

  return (
    <Div>
      <Trending artist={trendingArtist} />
      <DivDegrade />
      <ListArtists chart={chartArtists} chartName="Artistas" />
      <ListAlbums chart={chartAlbums} chartName="Albuns" />
      <Footer />
    </Div>
  )
}

export default Main
