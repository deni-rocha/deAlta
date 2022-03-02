import styled from 'styled-components'

const Div = styled.div`
  margin-top: 24px;
  font-family: 'Roboto', sans-serif;
`
const DivDegrade = styled.div`
@media screen and (min-width: 600px) {
       border-radius: 500px 500px 40px 40px;
     }
 width: inherit ;
 height: 100px;
 background: ${({ theme }) => theme.background} linear-gradient(to bottom,#111 10%,transparent 90%);
`



export {Div, DivDegrade}