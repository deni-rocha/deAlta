import { useContext } from 'react'
import ListArtists from '../../components/ChartList/Artists'
import ListTracks from '../../components/ChartList/Tracks'
import Footer from '../../components/Footer'
import SeeMore from '../../components/SeeMore'
import Trending from '../../components/Trending'
import ChartsContext from '../../context/chartsContext'
import BaseTemplate from '../../templates/BaseTemplate'
import { Div, DivDegrade } from './styled'

const Home = () => {
  const { dataCharts } = useContext(ChartsContext)
  const trendingArtist = dataCharts.trendingArtist
  const chartTracks = dataCharts.tracks
  const chartArtists = dataCharts.artists

  return (
    <BaseTemplate>
      <Div>
        <Trending artist={trendingArtist} />
        <DivDegrade />
        <ListArtists chart={chartArtists} chartName="Artistas" />
        <ListTracks chart={chartTracks} chartName="Músicas" />
        <SeeMore />
        <Footer />
      </Div>
    </BaseTemplate>
  )
}

export default Home
