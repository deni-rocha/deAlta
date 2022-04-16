import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DivLoad } from '../../../AppStyled'
import Load from '../../../assets/gifs/Load'
import CardTrack from '../../../components/CardTrack'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsPlaylist } from '../../../types/details/IDetailsPlaylist'
import getDateYear from '../../../utils/getYear'
import { Div } from '../detailsStyled'
import { DivDetailsPlaylist } from './styled'

const DetailsPlaylist = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsPlaylist | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`playlist/${id}`)
      const resData: IDetailsPlaylist = res.data
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null)
    return (
      <DivLoad>
        <Load className="load" />
      </DivLoad>
    )
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsPlaylist>
          <h1 className="nome-playlist"> {data.title}</h1>
          <p className="info-created info">
            {`criação: ${getDateYear(data.creation_date)} - 
            ${data.creator.name.substring(0, 5)}`}
          </p>
          <p className="info-fans info">{`fans: ${new Intl.NumberFormat(
            'br-IN'
          ).format(data.fans)}`}</p>
          <ul className="ul-tracks">
            {data.tracks.data.map((res, index) => (
              <li key={index}>
                <CardTrack
                  id={res.id}
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
