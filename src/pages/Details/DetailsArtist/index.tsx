import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTrack from '../../../components/CardTrack'
import { api } from '../../../services/api'
import BaseTemplate from '../../../templates/BaseTemplate'
import { IDetailsArtist } from '../../../types/details/IDetailsArtist'
import { Div } from '../detailsStyled'
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
        </DivDetailsArtist>
      </Div>
    </BaseTemplate>
  )
}

export default DetailsArtist
