import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTrack from '../../../components/CardTrack'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsPlaylist } from '../../../types/details/IDetailsPlaylist'
import { Div } from '../detailsStyled'
import { DivDetailsPlaylist } from './styled'

const DetailsPlaylist = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsPlaylist | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`playlist/${id}`)
      const resData: IDetailsPlaylist = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsPlaylist>
          <h1 className="nome-artista"> {data.title} </h1>
          <ul className="ul-tracks">
            {data.tracks.data.map((res, index) => (
              <li key={index}>
                <CardTrack
                  index={++index}
                  title_short={res.title_short}
                  preview={res.preview}
                  link={res.link}
                />
              </li>
            ))}
          </ul>
        </DivDetailsPlaylist>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsPlaylist
