import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../../assets/ArrowLeft'
import ArrowRight from '../../../assets/ArrowRight'
import { Tracks } from '../../../types/charts/ICharts'
import {
  handleLeftArrow,
  handleRightArrow,
} from '../../../utils/arrowsChartList'

import {
  DivChartItem,
  DivChartList,
  DivChartListArea,
  H1ChartName,
  SectionChart,
} from '../styled'

type IList = {
  chart: Tracks
  chartName: string
}
const ListTracks = ({ chart, chartName }: IList) => {
  const [scrollX, setScrollX] = useState(0)
  const listWidth = chart.data.length * 150

  return (
    <SectionChart>
      <H1ChartName> {chartName} </H1ChartName>
      <ArrowRight
        className="arrow-right arrow"
        width={'50px'}
        height={'50px'}
        onClick={() => handleRightArrow({ listWidth, scrollX, setScrollX })}
      />
      <ArrowLeft
        className="arrow-left arrow"
        width={'50px'}
        height={'50px'}
        onClick={() => handleLeftArrow({ scrollX, setScrollX })}
      />
      <DivChartListArea>
        <DivChartList
          style={{
            marginLeft: scrollX,
            width: chart.data.length * 150,
          }}
        >
          {chart.data.map((res) => {
            return (
              <DivChartItem key={res.id} onClick={() => console.log(res)}>
                <Link to={`/detailsTrack/${res.id}`}>
                  <img src={res.artist.picture_medium} alt="artista" />
                  <p>{res.title_short}</p>
                </Link>
              </DivChartItem>
            )
          })}
        </DivChartList>
      </DivChartListArea>
    </SectionChart>
  )
}

export default ListTracks
