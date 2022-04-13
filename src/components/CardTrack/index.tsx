import { useEffect, useState } from 'react'
import Star from '../../assets/Star'
import UnStar from '../../assets/UnStar'
import { trackExists, saveTrack, deleteTrack } from '../../utils/localTracks'
import DivCardTrack from './styled'

export interface ICardTrack {
  disk_number?: number
  index?: number
  title_short: string
  link: string
  preview: string
  id: number
}

const CardTrack = ({
  disk_number,
  index,
  title_short,
  preview,
  link,
  id,
}: ICardTrack) => {
  const [favorite, setFavorite] = useState<boolean>()

  function handleStar() {
    if (favorite) {
      deleteTrack(id)
    } else {
      saveTrack({ disk_number, index, title_short, preview, link, id })
    }
    setFavorite(!favorite)
  }

  useEffect(() => {
    let exists = trackExists(id)

    setFavorite(exists)
  }, [id])

  return (
    <DivCardTrack className="card-track">
      <div className="div-flex">
        <div className="div-flex--child"></div>
        <div className="card-track--div">
          {disk_number ? <p>{disk_number} -</p> : <p>{index} -</p>}
          <h1 className="card-track--div---title"> {title_short} </h1>
        </div>
        {favorite ? (
          <Star className="card-track--star" onClick={() => handleStar()} />
        ) : (
          <UnStar className="card-track--star" onClick={() => handleStar()} />
        )}
      </div>

      <audio src={preview} controls></audio>
      <a
        href={link}
        className="card-track--div---link"
        target="_blank"
        rel="noreferrer"
      >
        ouvir completa
      </a>
    </DivCardTrack>
  )
}

export default CardTrack
