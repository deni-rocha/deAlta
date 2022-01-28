import styled from "styled-components";

const Div = styled.div`
width: inherit;
height: 60px;
font-style: italic;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;

  .show-more{
    fill: ${({ theme }) => theme.titles}
  }
`

export { Div }