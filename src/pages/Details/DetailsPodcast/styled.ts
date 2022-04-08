import styled from 'styled-components'

const DivDetailsPodcast = styled.div`
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
  .nome-podcast {
    font-size: 20px;
    margin: 20px 0;
  }
  .info-descripton {
    max-width: 300px;

    p {
      text-align: center;
    }
  }
  .info {
    margin-bottom: 18px;
  }
  .btn-link {
    border: 0;
    outline: 0;
    cursor: pointer;
    color: white;
    background-color: #00b569;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    padding: 4px 8px;
    min-height: 28px;

    a {
      color: #a7dbc7;
      text-decoration: none;
      align-self: flex-end;
      justify-self: flex-end;
      font-size: 14px;
      &:hover {
        color: black;
      }
    }
  }
`

export { DivDetailsPodcast }
