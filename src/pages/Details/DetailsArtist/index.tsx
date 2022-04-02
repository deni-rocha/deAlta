import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import { GridDiv } from '../../../templates/BaseTemplate/styled'
import { IDetailsArtist } from '../../../types/details/IDetailsArtist'
import { Div, Title } from '../detailsStyled'

const DetailsArtist = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsArtist[] | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`artist/${id}`)
      const resData: IDetailsArtist[] = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null) return <p> carregando... </p>
  return (
    <GridDiv>
      <Div>
        <ul>
          {data?.map((res, index) => (
            <li key={index}>
             <Title> {res.title_short} </Title> 
              <audio src={res.preview} controls></audio>
            </li>
          ))}
        </ul>
      </Div>
    </GridDiv>
  )
}

export default DetailsArtist