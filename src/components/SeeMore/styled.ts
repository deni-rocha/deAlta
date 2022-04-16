import styled from 'styled-components'

const Div = styled.div`
  width: inherit;
  height: 60px;
  font-style: italic;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      color: ${({ theme }) => theme.titles};
    }
  }
  .show-more {
    fill: ${({ theme }) => theme.titles};
  }
`

export { Div }
