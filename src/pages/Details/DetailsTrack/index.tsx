import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTrack from '../../../components/CardTrack'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsTrack } from '../../../types/details/IDetailsTrack'
import { DivDetailsTrack } from './styled'

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
      <DivDetailsTrack>
        <CardTrack
          disk_number={data.disk_number}
          title_short={data.title_short}
          preview={data.preview}
          link={data.link}
        />
      </DivDetailsTrack>
    </BaseTemplate>
  )
}

export default DetailsTrack
