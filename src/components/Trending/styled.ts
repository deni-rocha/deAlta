import styled from 'styled-components'

const Div = styled.div`
  @media screen and (min-width: 600px) {
       margin-bottom: -10px;
     }
     @media screen and (min-width: 720px) {
        margin-bottom: -20px;
     }
  @media screen and (min-width: 900px) {
       margin-bottom: -10px;
     }
section{
  @media screen and (min-width: 600px) {
       height: 300px;
       width: 300px;
       margin: auto;
     }
     @media screen and (min-width: 720px) {
       height: 400px;
       width: 400px;
     }
     @media screen and (min-width: 900px) {
       height: 500px;
       width: 500px;
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
