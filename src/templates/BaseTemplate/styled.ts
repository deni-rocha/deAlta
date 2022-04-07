import styled from 'styled-components'

const GridDiv = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  font-family: 'Roboto', sans-serif;
`

export { GridDiv }
