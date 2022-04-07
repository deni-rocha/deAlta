import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsTrack } from '../../../types/details/IDetailsTrack'
import { CardTrack } from '../detailsStyled'

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
    <BaseTemplate>
      <CardTrack>
        <div className="card-li--div">
          <p>{data.disk_number}- </p>
          <h1 className="card-li--div---title"> {data.title_short} </h1>
        </div>
        <audio src={data.preview} controls></audio>
        <a href={data.link} className="card-li--div---link">
          ouvir completa
        </a>
      </CardTrack>
    </BaseTemplate>
  )
}

export default DetailsTrack
