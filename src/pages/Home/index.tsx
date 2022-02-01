import { useContext } from 'react'
import ListAlbums from '../../components/ChartList/Albums'
import ListArtists from '../../components/ChartList/Artists'
import Footer from '../../components/Footer'
import Trending from '../../components/Trending'
import ChartsContext from '../../context/chartsContext'
import BaseTemplate from '../../templates/BaseTemplate'
import { Div, DivDegrade } from './styled'

const Home = () => {
  
  const { dataCharts } = useContext(ChartsContext)
  const trendingArtist = dataCharts.trendingArtist
  const chartArtists = dataCharts.artists
  const chartAlbums = dataCharts.albums

  return (
    <BaseTemplate>
       <Div>
      <Trending artist={trendingArtist} />
      <DivDegrade />
      <ListArtists chart={chartArtists} chartName="Artistas" />
      <ListAlbums chart={chartAlbums} chartName="Albuns" />
      <Footer />
    </Div>
    </BaseTemplate>
  )
}

export default Home