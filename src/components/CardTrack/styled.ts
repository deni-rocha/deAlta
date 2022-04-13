import styled from 'styled-components'

const DivCardTrack = styled.div`
  color: #d6e1df;
  background-color: #00b569;
  border-radius: 10px;
  height: 150px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 12px 0px;
  margin-top: 24px;

  .div-flex {
    width: 100%;
    justify-content: space-evenly;
    align-items: baseline;
    display: flex;
    &--child {
      flex-grow: 1;
    }
  }
  .card-track--star {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .card-track--div {
    display: flex;
    flex-grow: 1;

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
  .card-track--div audio::-webkit-media-controls-panel {
    background-color: #a2d5ab;
  }
`

export default DivCardTrack
