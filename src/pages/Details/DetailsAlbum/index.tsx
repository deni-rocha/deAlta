import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DivLoad } from '../../../AppStyled'
import CardTrack from '../../../components/CardTrack'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsAlbum } from '../../../types/details/IDetailsAlbum'
import getDateYear from '../../../utils/getYear'
import { Div } from '../detailsStyled'
import { DivDetailsAlbum } from './style'
import Load from '../../../assets/gifs/Load'

const DetailsArtist = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsAlbum | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`album/${id}`)
      const resData: IDetailsAlbum = res.data
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
        <DivDetailsAlbum>
          <div className="div-image">
            <img src={data.cover_big} alt="capa do álbum" />
          </div>
          <section className="section-info">
            <h1 className="section-info--tittle">{data.title}</h1>
            <p className="p-info">ano: {getDateYear(data.release_date)}</p>
            <p className="section-info--genero p-info">
              gênero:
              {data.genres.data[0]
                ? ` ${data.genres.data[0].name}`
                : ' não encontrado'}
            </p>
            <p className="section-info--nTracks p-info">
              número de músicas: {data.nb_tracks}
            </p>
          </section>
          {data.tracks.data.map((obj, index) => (
            <CardTrack
              id={obj.id}
              index={++index}
              title_short={obj.title_short}
              preview={obj.preview}
              link={data.link}
            />
          ))}
        </DivDetailsAlbum>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsArtist
