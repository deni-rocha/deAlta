import { useContext } from 'react'
import styled from 'styled-components'
import ChartsContext from '../../context/chartsContext'

const Div = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 400px;
`

const Header = () => {
  const dataCharts = useContext(ChartsContext)

  console.log(dataCharts)

  return (
    <>
      <Div>oi né</Div>
    </>
  )
}

export default Header
