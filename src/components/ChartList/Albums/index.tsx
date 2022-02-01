import { useState } from 'react'
import ArrowLeft from '../../../assets/ArrowLeft'
import ArrowRight from '../../../assets/ArrowRight'
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
      <ArrowRight className='arrow-right arrow' width={'50px'} height={'50px'} onClick={handleRightArrow}/>
      <ArrowLeft className='arrow-left arrow' width={'50px'} height={'50px'} onClick={handleLeftArrow} />
      <DivChartListArea>
        <DivChartList style={{
          marginLeft: scrollX,
          width: chart.data.length * 150,
        }}>
          {chart.data.map((res) => {
            return (
              <DivChartItem key={res.id} >
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
