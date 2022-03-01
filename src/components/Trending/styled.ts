import styled from 'styled-components'

const Div = styled.div`
section{
  @media screen and (min-width: 500px) {
       height: 500px;
     }
  background-size: cover;
  background-position: center;
  height: 400px;
  border-radius: 12px 12px 0px 0px;
  p{
    color: white;
  }
}
`
const DegradeVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export { Div, DegradeVertical }
