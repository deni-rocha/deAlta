import GitHub from '../../assets/GitHub'
import Linkedin from '../../assets/Linkedin'
import { Div } from './styled'
const Footer = () => {
  return (
    <Div>
      <div className="icon-git">
        <a
          href="https://github.com/deni-rocha/deAlta"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <GitHub /> <p> git-hub </p>
        </a>
      </div>

      <div className="icon-lk">
        <a
          href="https://www.linkedin.com/in/denilson-rocha-aa0a39202/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <Linkedin /> <p>linkedin</p>
        </a>
      </div>
    </Div>
  )
}

export default Footer
