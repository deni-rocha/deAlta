import { useState } from 'react'
import ArrowLeft from '../../../assets/ArrowLeft'
import ArrowRight from '../../../assets/ArrowRight'
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

  const [scrollX, setScrollX] = useState(0)
  
  function handleLeftArrow () {
      let x = scrollX + Math.round(window.innerWidth / 2)
      if(x > 0) {
        x = 0
      }

      setScrollX(x)
  }

  function handleRightArrow (){
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = chart.data.length * 150;

    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60
    }
   
    setScrollX(x)
  } 
  
  return (
    <SectionChart>
      <H1ChartName> {chartName} </H1ChartName>
      <ArrowRight className='arrow-right arrow' width={'50px'} height={'50px'}/>
      <ArrowLeft className='arrow-left arrow' width={'50px'} height={'50px'} />
      <DivChartListArea>
        <DivChartList style={{
          marginLeft: -400,
          width: chart.data.length * 150,
        }}>
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
