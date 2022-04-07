import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsAlbum } from '../../../types/details/IDetailsAlbum'
import { Div } from '../detailsStyled'
import { DivDetailsAlbum } from './style'

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

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsAlbum>
          <div className="div-image">
            <img src={data.cover_big} alt="capa do álbum" />
          </div>
          <section className="section-info">
            <h1 className="tittle">{data.title}</h1>
            <section className="section-info--genero">
              <p>{data.genres.data.length > 0 ? `gênero` : `gêneros`}: </p>
              {data.genres.data.map((obj, index) => (
                <p key={index} className="section-info--genero---name">
                  {obj.name}
                </p>
              ))}
            </section>
          </section>
        </DivDetailsAlbum>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsArtist
