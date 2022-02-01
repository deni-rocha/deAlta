
import { useParams } from 'react-router-dom';
import BaseTemplate from '../../templates/BaseTemplate'
import { Div } from './styled'

const Info = () => {

    let { id } = useParams();

  return (
    <BaseTemplate>
    <Div>
      id: {id}
    </Div>
    </BaseTemplate>
  )
}

export default Info