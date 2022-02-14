import axios from 'axios'
import { ICharts } from '../../types/ICharts'

let BASE_URL = () => {
  if(process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_LOCALHOST

  } else {

    return process.env.REACT_APP_HEROKU_API
  }
}

const api = axios.create({
  baseURL:  BASE_URL()
})

async function getCharts() {
  const chartsDeezer: ICharts[] = []

  const res = await api.get('charts')
  chartsDeezer.push(res.data)

  return chartsDeezer[0]
}

export { getCharts, api }
