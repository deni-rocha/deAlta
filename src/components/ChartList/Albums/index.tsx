import { Albums } from '../../../types/ICharts'

import {
  DivChartItem,
  DivChartList,
  DivChartListArea,
  H1ChartName,
  SectionChart,
} from '../styled'

type IList = {
  chart: Albums
  chartName: string
}
const ListAlbums = ({ chart, chartName }: IList) => {
  return (
    <SectionChart>
      <H1ChartName> {chartName} </H1ChartName>
      <DivChartListArea>
        <DivChartList>
          {chart.data.map((res) => {
            return (
              <DivChartItem key={res.id}>
                <img src={res.cover} alt="artista" />
                <p>
                  {' '}
                  {res.position} - {res.title}{' '}
                </p>
              </DivChartItem>
            )
          })}
        </DivChartList>
      </DivChartListArea>
    </SectionChart>
  )
}

export default ListAlbums
