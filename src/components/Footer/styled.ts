import styled from 'styled-components'

const Div = styled.div`
  width: inherit;
  height: 60px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 0;
  .link {
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    p {
      padding-left: 4px;
      color: ${({ theme }) => theme.titles};
    }

    svg {
      width: 28px;
      fill: ${({ theme }) => theme.titles};
    }
  }

  .icon-lk {
  }
`

export { Div }
