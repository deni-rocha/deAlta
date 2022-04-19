import { Artists } from '../../../types/charts/ICharts'
import {
  DivChartItem,
  DivChartList,
  DivChartListArea,
  H1ChartName,
  SectionChart,
} from '../styled'

import ArrowRight from '../../../assets/ArrowRight'
import ArrowLeft from '../../../assets/ArrowLeft'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  handleLeftArrow,
  handleRightArrow,
} from '../../../utils/arrowsChartList'
type IList = {
  chart: Artists
  chartName: string
}
const ListArtists = ({ chart, chartName }: IList) => {
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
              <DivChartItem key={res.id}>
                <Link to={`/detailsArtist/${res.id}/${res.name}`}>
                  <img src={res.picture} alt="artista" />
                  <p>
                    {res.position} - {res.name}{' '}
                  </p>
                </Link>
              </DivChartItem>
            )
          })}
        </DivChartList>
      </DivChartListArea>
    </SectionChart>
  )
}

export default ListArtists
