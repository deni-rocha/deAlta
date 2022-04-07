import styled from 'styled-components'

const DivDetailsArtist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .nome-artista {
    font-size: 20px;
    margin-top: 24px;
  }
  .sub-title {
    margin: 14px 0 20px;
  }
  .ul-tracks {
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

export { DivDetailsArtist }
