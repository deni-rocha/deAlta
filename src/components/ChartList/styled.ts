import styled from 'styled-components'

const SectionChart = styled.section`
  margin-bottom: 30px;

  .arrow {
    fill: ${({ theme }) => theme.titles};
    position: absolute;
    width: 40px;
    height: 150px;
    z-index: 99;
    background: ${({ theme }) => theme.background};
    opacity: 0.7;
    cursor: pointer;
  }
  .arrow-left {
    left: 0;
    @media screen and (min-width: 600px) {
      left: auto;
      right: 80%;
    }
    @media screen and (min-width: 950px) {
      right: 82%;
    }
  }
  .arrow-right {
    right: 0;
    @media screen and (min-width: 600px) {
      right: auto;
      left: 80%;
    }
    @media screen and (min-width: 950px) {
      left: 82%;
    }
  }
`
const H1ChartName = styled.h2`
  margin: 0px 0px 12px 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.titles};
`

const DivChartListArea = styled.div`
  overflow: hidden;
  padding-left: 30px;
`
const DivChartList = styled.div`
  transition: all ease 0.5s;
`
const DivChartItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    border-radius: 14px;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }

  p {
    display: block;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 6px;
    color: ${({ theme }) => theme.titles};
  }
`
export {
  SectionChart,
  H1ChartName,
  DivChartListArea,
  DivChartList,
  DivChartItem,
}
