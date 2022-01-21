import { Playlists } from '../../../types/ICharts'

import {
  DivChartItem,
  DivChartList,
  DivChartListArea,
  H1ChartName,
  SectionChart,
} from '../styled'

type IList = {
  chart: Playlists
  chartName: string
}
const ListPlaylists = ({ chart, chartName }: IList) => {
  return (
    <SectionChart>
      <H1ChartName> {chartName} </H1ChartName>
      <DivChartListArea>
        <DivChartList>
          {chart.data.map((res) => {
            return (
              <DivChartItem key={res.id}>
                <img src={res.picture} alt="artista" />
                <p>
                  {' '}
                  {res.creation_date} - {res.title}{' '}
                </p>
              </DivChartItem>
            )
          })}
        </DivChartList>
      </DivChartListArea>
    </SectionChart>
  )
}

export default ListPlaylists
