import styled from "styled-components";

const SectionChart = styled.section`
  margin-bottom: 30px;
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
  width: 99999px;
` 
const DivChartItem = styled.div`
display: inline-block;
width: 150px;
cursor: pointer;

 img {
   border-radius: 14px;
   width: 100%;
   transform: scale(0.9);
   transition: all ease 0.2s;
 }
 img:hover {
   transform: scale(1);
 }

 p{
  display: block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 6px;
 }

`
export { SectionChart, H1ChartName, DivChartListArea, DivChartList, DivChartItem}