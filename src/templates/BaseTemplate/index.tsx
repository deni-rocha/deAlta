import { GridDiv } from './styled'

type IBaseTemplate = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: IBaseTemplate) => {
  return <GridDiv>{children}</GridDiv>
}

export default BaseTemplate
