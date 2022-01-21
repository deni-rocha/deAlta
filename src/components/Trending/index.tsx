import { useState, useEffect } from 'react'
import { Artists } from '../../types/ICharts'
import { DegradeVertical, Div } from './styled'

type ITrending = {
  chart: Artists
}

function Trending({ chart }: ITrending) {
  const [randomChosen, setRandomChosen] = useState(0)

  useEffect(() => {
    const randomChosen = Math.floor(Math.random() * chart.data.length - 1)
    setRandomChosen(randomChosen)
  }, [chart.data.length])

  console.log('render Trending')
  const chosen = chart.data[randomChosen]
  return (
    <Div>
      <section
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${chosen.picture_medium})`,
        }}
      >
        <DegradeVertical>
          <p> {chosen.name}</p>
        </DegradeVertical>
      </section>
    </Div>
  )
}

export default Trending
