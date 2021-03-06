import styled from 'styled-components'

const Div = styled.div`
  margin-top: 24px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.titles};
  .ul-tracks {
    min-height: calc(100vh - 182px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 28px;
  }

  li {
    width: 100%;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
const SemFavoritos = styled.div`
  margin: 28px auto;
  width: 300px;
  min-height: calc(100vh - 204px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export { Div, SemFavoritos }
