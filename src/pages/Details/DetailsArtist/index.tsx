import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsArtist } from '../../../types/details/IDetailsArtist'
import { Div, CardTrack } from '../detailsStyled'
import { DivDetailsArtist } from './styled'

const DetailsArtist = () => {
  let { id, name } = useParams()
  const [data, setData] = useState<IDetailsArtist[] | null>(null)

  useEffect(() => {
    const fetch = async () => {
      let res = await api.get(`artist/${id}`)
      const resData: IDetailsArtist[] = res.data
      console.log('res da api', resData)
      setData(resData)
    }

    fetch()
  }, [id, name])

  if (data === null) return <p> carregando... </p>
  return (
    <BaseTemplate>
      <Div>
        <DivDetailsArtist>
          <h1 className="nome-artista"> {name} </h1>
          <h3 className="sub-title">(Músicas que estão em alta)</h3>
          <ul className="ul-tracks">
            {data?.map((res, index) => (
              <li key={index}>
                <CardTrack>
                  <div className="card-li--div">
                    <p>{++index} - </p>
                    <h1 className="card-li--div---title">{res.title_short}</h1>
                  </div>
                  <audio src={res.preview} controls></audio>
                  <a href={res.link} className="card-li--div---link">
                    ouvir completa
                  </a>
                </CardTrack>
              </li>
            ))}
          </ul>
        </DivDetailsArtist>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsArtist
