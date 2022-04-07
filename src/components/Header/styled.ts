import styled from 'styled-components'

const Div = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;

  .link {
    text-decoration: none;
  }
`

const DivTittle = styled.div`
  margin-left: 12px;
  display: flex;
  font-weight: 700;
  font-size: 16px;
  .style {
    text-shadow: 1px 1px 1px #009688;
  }
  .first {
    color: #f55376;
    margin-right: 4px;
  }
  .second {
    color: #f5bc00;
  }
  .third {
    color: #00b569;
  }
`

const Ul = styled.ul`
  width: calc(100% / 2);
  justify-content: space-around;
  height: inherit;
  display: flex;
  align-items: center;
`
const Li = styled.li`
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  & svg {
    width: 24px;
    height: 24px;
    & path {
      fill: ${({ theme }) => theme.text};
    }
  }
`

export { Div, DivTittle, Ul, Li, Button }
