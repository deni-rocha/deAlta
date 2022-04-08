import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsPodcast } from '../../../types/details/IDetailsPodcast'
import { Div } from '../detailsStyled'
import { DivDetailsPodcast } from './styled'

const DetailsPodcast = () => {
  let { id } = useParams()
  const [data, setData] = useState<IDetailsPodcast | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`podcast/${id}`)
      const resData: IDetailsPodcast = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id])

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsPodcast>
          <div className="div-image">
            <img src={data.picture_big} alt="capa do álbum" />
          </div>
          <h1 className="nome-podcast"> {data.title}</h1>
          <section className="info-descripton info">
            <p>{data.description}</p>
          </section>
          <p className="info-fans info">{`fans: ${new Intl.NumberFormat(
            'br-IN'
          ).format(data.fans)}`}</p>

          <button className="btn-link info">
            <a href={data.link} target="_blank" rel="noreferrer">
              acessar
            </a>
          </button>
        </DivDetailsPodcast>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsPodcast
