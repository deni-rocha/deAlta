import axios from 'axios'
import { ICharts } from '../../types/ICharts'

const api = axios.create({
  baseURL: 'http://api.deezer.com/',
})

async function getCharts() {
  const chartsDeezer: ICharts[] = []

  const res = await api.get('chart')
  chartsDeezer.push(res.data)

  return chartsDeezer[0]
}

export { getCharts }
