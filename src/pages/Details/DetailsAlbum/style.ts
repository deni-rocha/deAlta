import styled from 'styled-components'

const DivDetailsAlbum = styled.div`
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
    margin: 28px 0;
    &--tittle {
      font-size: 24px;
      margin: 12px 0;
    }

    .p-info {
      margin-top: 8px;
    }
  }
`

export { DivDetailsAlbum }
