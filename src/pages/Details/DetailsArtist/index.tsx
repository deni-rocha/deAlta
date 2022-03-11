import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import { IDetails } from '../../../types/details/IDetailsArtist'
import { Div } from './styled'

const DetailsArtist = () => {
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
  )
}

export default DetailsArtist