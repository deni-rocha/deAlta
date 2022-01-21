import styled from "styled-components";

const GridDiv = styled.div`
height: 100%;
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
padding: .5rem;
`

export {GridDiv}