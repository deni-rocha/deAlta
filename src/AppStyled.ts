import styled from "styled-components";

const DivLoad = styled.div`
position: fixed;
left: 0;
top: 60px;
right: 0;
bottom: 0;
z-index: 99;
background-color: ${({ theme }) => theme.background};
display: flex;
align-items: center;
justify-content: center;

  .load {

  }
`

export {DivLoad}