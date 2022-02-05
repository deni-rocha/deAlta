import { Link } from 'react-router-dom'
import Lamp from '../../assets/Lamp'
import { Button, Div, DivTittle, Li, Ul } from './styled'

type IHeader = {
  theme: {
    isDarkTheme: boolean
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const Header = ({ theme }: IHeader) => {

  function handleTheme () {
    let changeTheme = !theme.isDarkTheme
    theme.setIsDarkTheme(changeTheme)

    let themeParsed: string = JSON.stringify(changeTheme)
    localStorage.setItem('theme', themeParsed)
  }
  return (
    <Div>
      <DivTittle>
        <p className="first style">De</p>
        <p className="second style">AL</p>
        <p className="third style">TA</p>
      </DivTittle>
      <Ul>
        <Li> <Link to="/"> Início </Link> </Li>
        <Li><Link to="/charts"> Charts</Link></Li>
        <Li> <Link to="/saves"> Salvos</Link></Li>
      </Ul>
      <Button onClick={handleTheme}>
        <Lamp />
      </Button>
    </Div>
  )
}

export default Header
