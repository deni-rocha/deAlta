import { useState } from 'react'
import ArrowLeft from '../../../assets/ArrowLeft'
import ArrowRight from '../../../assets/ArrowRight'
import { Podcasts } from '../../../types/charts/ICharts'

import {
  DivChartItem,
  DivChartList,
  DivChartListArea,
  H1ChartName,
  SectionChart,
} from '../styled'

type IList = {
  chart: Podcasts
  chartName: string
}
const ListPodcasts = ({ chart, chartName }: IList) => {
  const [scrollX, setScrollX] = useState(0)

  function handleLeftArrow() {
    let containerCards

    if (window.innerWidth > 600) {
      containerCards =
        scrollX + Math.round(((70 / 100) * window.innerWidth) / 2)
    } else {
      containerCards = scrollX + Math.round(window.innerWidth / 2)
    }

    if (containerCards > 0) {
      containerCards = 0
    }

    setScrollX(containerCards)
  }

  function handleRightArrow() {
    let containerCards
    let inheritContainerCards
    let listW = chart.data.length * 150

    if (window.innerWidth > 600) {
      containerCards =
        scrollX - Math.round(((70 / 100) * window.innerWidth) / 2)

      inheritContainerCards = (70 / 100) * window.innerWidth - listW
    } else {
      containerCards = scrollX - Math.round(window.innerWidth / 2)
      inheritContainerCards = window.innerWidth - listW
    }

    if (inheritContainerCards > containerCards) {
      containerCards = inheritContainerCards - 60
    }

    setScrollX(containerCards)
  }

  return (
    <SectionChart>
      <H1ChartName> {chartName} </H1ChartName>
      <ArrowRight
        className="arrow-right arrow"
        width={'50px'}
        height={'50px'}
        onClick={handleRightArrow}
      />
      <ArrowLeft
        className="arrow-left arrow"
        width={'50px'}
        height={'50px'}
        onClick={handleLeftArrow}
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
              <DivChartItem key={res.id} onClick={() => console.log(res.id)}>
                <img src={res.picture} alt="artista" />
                <p> {res.title} </p>
              </DivChartItem>
            )
          })}
        </DivChartList>
      </DivChartListArea>
    </SectionChart>
  )
}

export default ListPodcasts
