import styled from "styled-components";

const DivMain = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  .center {
    @media screen and (min-width: 600px) {
        width: 70%;
        margin: auto;
     }
  }
`

const DivLoad = styled.div`
position: fixed;
left: 0;
top: 60px;
right: 0;
bottom: 0;
z-index: 99;
background-color: inherit;
display: flex;
align-items: center;
justify-content: center;

  .load {

  }
`

export {DivMain, DivLoad}