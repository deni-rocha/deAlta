import { useContext, useEffect } from 'react'

import { getCharts } from '../../services/api'
import ChartsContext from '../../context/chartsContext'
import { Div, DivDegrade } from './styled'
import ListArtists from '../ChartList/Artists'
import ListAlbums from '../ChartList/Albums'
import Trending from '../Trending'
import Footer from '../Footer'

const Main = () => {
  const { dataCharts, setDataCharts } = useContext(ChartsContext)
  const chartArtists = dataCharts.artists
  const chartAlbums = dataCharts.albums
  const loading = dataCharts.artists.total === 1 ? true : false

  useEffect(() => {
    const fetch = async () => {
      const res = await getCharts()
      setDataCharts(res)
    }

    fetch()
  }, [setDataCharts])

  if (loading) return <h4>carregando...</h4>

  return (
    <Div>
      <Trending chart={chartArtists} />
      <DivDegrade />
      <ListArtists chart={chartArtists} chartName="Artistas" />
      <ListAlbums chart={chartAlbums} chartName="Albuns" />
      <Footer />
    </Div>
  )
}

export default Main
