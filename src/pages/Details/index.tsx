import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import BaseTemplate from '../../templates/BaseTemplate'
import { IDetails } from '../../types/IDetails'
import { Div } from './styled'

const Details = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetails[] | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`artist/${id}`)
      const resData: IDetails[] = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <ul>
          {data?.map((res, index) => (
            <li key={index}>
              {res.title_short}
              <audio src={res.preview} controls></audio>
            </li>
          ))}
        </ul>
      </Div>
    </BaseTemplate>
  )
}

export default Details
