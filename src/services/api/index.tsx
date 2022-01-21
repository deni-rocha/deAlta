import axios from 'axios'
import { ICharts } from '../../types/ICharts'

const api = axios.create({
  baseURL: 'https://api-deezer.herokuapp.com/',
})

async function getCharts() {
  const chartsDeezer: ICharts[] = []

  const res = await api.get('charts')
  chartsDeezer.push(res.data)

  return chartsDeezer[0]
}

export { getCharts }
