import DivCardTrack from './styled'

interface ICardTrack {
  disk_number?: number
  index?: number
  title_short: string
  link: string
  preview: string
}
const CardTrack = ({
  disk_number,
  index,
  title_short,
  preview,
  link,
}: ICardTrack) => {
  return (
    <DivCardTrack className="card-track">
      <div className="card-track--div">
        {disk_number ? <p>{disk_number} -</p> : <p>{index} -</p>}
        <h1 className="card-track--div---title"> {title_short} </h1>
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
