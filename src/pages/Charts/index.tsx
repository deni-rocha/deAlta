import { useContext } from 'react'
import ListAlbums from '../../components/ChartList/Albums'
import ListArtists from '../../components/ChartList/Artists'
import ListPlaylists from '../../components/ChartList/Playlists'
import ListPodcasts from '../../components/ChartList/podcasts'
import ListTracks from '../../components/ChartList/Tracks'
import ChartsContext from '../../context/chartsContext'
import BaseTemplate from '../../templates/BaseTemplate'
import { Div } from './styled'

const Charts = () => {
  const { dataCharts } = useContext(ChartsContext)

  const chartArtists = dataCharts.artists
  const chartAlbums = dataCharts.albums
  const chartPlaylists = dataCharts.playlists
  const chartPodcasts = dataCharts.podcasts
  const chartTracks = dataCharts.tracks

  return (
    <BaseTemplate>
      <Div>
        <ListArtists chart={chartArtists} chartName="Artistas" />
        <ListAlbums chart={chartAlbums} chartName="Albuns" />
        <ListPlaylists chart={chartPlaylists} chartName="Playlists" />
        <ListPodcasts chart={chartPodcasts} chartName="Podcasts"/>
        <ListTracks chart={chartTracks} chartName="Músicas"  />
      </Div>
    </BaseTemplate>
  )
}

export default Charts 