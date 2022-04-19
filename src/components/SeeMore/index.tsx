import { Div } from './styled'
import ShowMore from '../../assets/ShowMore'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import urlPathContext from '../../context/urlPathContext'
const SeeMore = () => {
  const { setPathName } = useContext(urlPathContext)
  return (
    <Div>
      <Link
        to="/charts"
        className="link"
        onClick={() => setPathName('/charts')}
      >
        <p>ver mais</p>
        <ShowMore className="show-more" width={'50px'} height={'50px'} />
      </Link>
    </Div>
  )
}

export default SeeMore
