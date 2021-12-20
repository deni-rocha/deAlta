import axios from 'axios'
import { ICharts } from '../types/ICharts'

const api = axios.create({
  baseURL: 'http://api.deezer.com/',
})

function getCharts() {
  const chartsDeezer: Array<ICharts> = []

  api
    .get('chart')
    .then((res) => chartsDeezer.push(res.data))
    .catch((error) => console.log(error))

  return chartsDeezer
}

export { getCharts }
