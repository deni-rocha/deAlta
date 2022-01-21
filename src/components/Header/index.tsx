import Lamp from '../../assets/Lamp'
import { Button, Div, DivTittle, Li, Ul } from './styled'

type IHeader = {
  theme: {
    isDarkTheme: boolean
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const Header = ({ theme }: IHeader) => {
  return (
    <Div>
      <DivTittle>
        <p className="first style">De</p>
        <p className="second style">AL</p>
        <p className="third style">TA</p>
      </DivTittle>
      <Ul>
        <Li>Home</Li>
        <Li>Charts</Li>
        <Li>Salvos</Li>
      </Ul>
      <Button onClick={() => theme.setIsDarkTheme(!theme.isDarkTheme)}>
        <Lamp />
      </Button>
    </Div>
  )
}

export default Header
