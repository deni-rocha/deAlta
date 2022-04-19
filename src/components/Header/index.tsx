import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Lamp from '../../assets/Lamp'
import NavigationRight from '../../assets/NavigationRight'
import urlPathContext from '../../context/urlPathContext'
import { Button, Div, DivTittle, Li, Ul } from './styled'

type IHeader = {
  theme: {
    isDarkTheme: boolean
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const Header = ({ theme }: IHeader) => {
  const { pathName, setPathName } = useContext(urlPathContext)

  function pageUrl(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    let path = e.currentTarget.pathname
    setPathName(path)
  }

  function handleTheme() {
    let changeTheme = !theme.isDarkTheme
    theme.setIsDarkTheme(changeTheme)

    let themeParsed: string = JSON.stringify(changeTheme)
    localStorage.setItem('theme', themeParsed)
  }
  return (
    <Div>
      <Link to={'/'} className="link">
        <DivTittle>
          <p className="first style">De</p>
          <p className="second style">AL</p>
          <p className="third style">TA</p>
        </DivTittle>
      </Link>
      <Ul>
        <Li>
          <NavigationRight className={pathName === '/' ? 'active' : ''} />
          <Link to="/" onClick={(e) => pageUrl(e)}>
            Início
          </Link>
        </Li>
        <Li>
          <NavigationRight className={pathName === '/charts' ? 'active' : ''} />
          <Link to="/charts" onClick={(e) => pageUrl(e)}>
            Charts
          </Link>
        </Li>
        <Li>
          <NavigationRight className={pathName === '/saves' ? 'active' : ''} />
          <Link to="/saves" onClick={(e) => pageUrl(e)}>
            Salvos
          </Link>
        </Li>
      </Ul>
      <Button onClick={handleTheme}>
        <Lamp />
      </Button>
    </Div>
  )
}

export default Header
