import { Div } from './styled'
import ShowMore from '../../assets/ShowMore'
import { Link } from 'react-router-dom'
const SeeMore = () => {
  return (
    <Div>
      <Link to="/charts" className="link">
        <p>ver mais</p>
        <ShowMore className="show-more" width={'50px'} height={'50px'} />
      </Link>
    </Div>
  )
}

export default SeeMore
