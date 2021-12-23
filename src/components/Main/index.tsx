import { useContext, useEffect } from 'react'

import { getCharts } from '../../services/api'
import ChartsContext from '../../context/chartsContext'
import { Div, Li, Ul } from './styled'

const Main = () => {
  const { dataCharts, setDataCharts } = useContext(ChartsContext)
  const chartArtists = dataCharts.artists.data
  const loading = dataCharts.artists.total === 1 ? true : false

  useEffect(() => {
    const fetch = async () => {
      const res = await getCharts()
      setDataCharts(res)
    }

    fetch()
  }, [setDataCharts])

  if (loading) return <h4>carregando...</h4>

  return (
    <Div>
      <Ul>
        {chartArtists.map((res) => {
          return (
            <Li key={res.id}>
              <img src={res.picture} alt="artista" />
              <p>
                {' '}
                {res.position} - {res.name}{' '}
              </p>
            </Li>
          )
        })}
      </Ul>
    </Div>
  )
}

export default Main
