import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsAlbum } from '../../../types/details/IDetailsAlbum'
import { CardTrack, Div } from '../detailsStyled'
import { DivDetailsAlbum } from './style'

const DetailsArtist = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsAlbum | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`album/${id}`)
      const resData: IDetailsAlbum = res.data
      setData(resData)
      console.log(resData)
    }

    fetch()
  }, [id])

  function getYear(str: string) {
    const date = new Date(str)
    const year = date.getFullYear()

    return year
  }

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsAlbum>
          <div className="div-image">
            <img src={data.cover_big} alt="capa do álbum" />
          </div>
          <section className="section-info">
            <h1 className="section-info--tittle">{data.title}</h1>
            <p className="p-info">ano: {getYear(data.release_date)}</p>
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
            <CardTrack>
              <div className="card-li--div">
                <h1 className="card-li--div---title"> {obj.title_short} </h1>
              </div>
              <audio src={obj.preview} controls></audio>
              <a href={data.link} className="card-li--div---link">
                ouvir completa
              </a>
            </CardTrack>
          ))}
        </DivDetailsAlbum>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsArtist
