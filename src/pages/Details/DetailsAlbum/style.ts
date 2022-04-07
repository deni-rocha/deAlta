import styled from 'styled-components'

const DivDetailsAlbum = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .div-image {
    width: 300px;
    height: 300px;
    img {
      border-radius: 10%;
      height: inherit;
      width: inherit;
    }
  }
  .section-info {
    margin-top: 28px;
    .tittle {
      font-size: 24px;
    }

    &--genero {
      margin-top: 18px;
      display: flex;
      &---name {
        padding-left: 8px;
      }
    }
  }
`

export { DivDetailsAlbum }
