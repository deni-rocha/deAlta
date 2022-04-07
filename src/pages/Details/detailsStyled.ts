import styled from 'styled-components'

const Div = styled.div`
  color: ${({ theme }) => theme.titles};
`

const CardTrack = styled.div`
  color: #d6e1df;
  background-color: #00b569;
  border-radius: 10px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 12px 0px;
  margin-top: 24px;
  .card-li--div {
    display: flex;
    justify-content: space-around;

    &---title {
      margin-bottom: 12px;
      margin-left: 4px;
    }

    &---link {
      color: #a7dbc7;
      text-decoration: none;
      align-self: flex-end;
      justify-self: flex-end;
      font-size: 14px;
      &:hover {
        color: #00092c;
      }
    }
  }
  .card-li--div audio::-webkit-media-controls-panel {
    background-color: #a2d5ab;
  }
`

export { Div, CardTrack }
