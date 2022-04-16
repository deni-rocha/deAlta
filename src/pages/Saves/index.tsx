import { useEffect, useState } from 'react'
import CardTrack, { ICardTrack } from '../../components/CardTrack'
import Footer from '../../components/Footer'
import { Div, SemFavoritos } from './styled'

const Saves = () => {
  const [dataFavorites, setDataFavorites] = useState<ICardTrack[]>()
  const [modified, setModified] = useState(false)
  useEffect(() => {
    const trackSaves: string = localStorage.tracks || JSON.stringify([])

    const dataParser: ICardTrack[] = JSON.parse(trackSaves)
    setDataFavorites(dataParser)
  }, [modified])

  function handleClick() {
    setModified(!modified)
  }

  if (dataFavorites?.length === 0)
    return (
      <Div>
        <SemFavoritos>
          <h1>Você ainda não salvou nenhuma música</h1>
        </SemFavoritos>
        <Footer />
      </Div>
    )
  return (
    <Div>
      <ul className="ul-tracks">
        {dataFavorites?.map((res, index) => (
          <li key={res.id} onClick={handleClick}>
            <CardTrack
              disk_number={res.disk_number}
              title_short={res.title_short}
              preview={res.preview}
              link={res.link}
              id={res.id}
              index={++index}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </Div>
  )
}

export default Saves
