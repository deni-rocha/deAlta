import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import { GridDiv } from '../../../templates/BaseTemplate/styled'
import { IDetailsTrack } from '../../../types/details/IDetailsTrack'
import { Title } from '../detailsStyled'
import { Div } from './styled'

const DetailsTrack = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsTrack | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`track/${id}`)
      const resData: IDetailsTrack = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null) return <p> carregando... </p>
  return (
    <GridDiv>
      <Div>
        
        <Title>{data.title_short}</Title>
        <h2>letra explícita: {data.explicit_lyrics? 'sim' : 'não'}</h2>
          <audio src={data.preview} controls></audio>
      </Div>
    </GridDiv>
  )
}

export default DetailsTrack