interface IhandleLeftArrow {
  scrollX: number
  setScrollX: React.Dispatch<React.SetStateAction<number>>
}

interface IhandleRightArrow {
  listWidth: number
  scrollX: number
  setScrollX: React.Dispatch<React.SetStateAction<number>>
}

function handleLeftArrow({ scrollX, setScrollX }: IhandleLeftArrow) {
  let containerCards

  if (window.innerWidth > 600) {
    containerCards = scrollX + Math.round(((70 / 100) * window.innerWidth) / 2)
  } else {
    containerCards = scrollX + Math.round(window.innerWidth / 2)
  }

  if (containerCards > 0) {
    containerCards = 0
  }

  setScrollX(containerCards)
}

function handleRightArrow({
  listWidth,
  scrollX,
  setScrollX,
}: IhandleRightArrow) {
  let containerCards
  let inheritContainerCards

  if (window.innerWidth > 600) {
    containerCards = scrollX - Math.round(((70 / 100) * window.innerWidth) / 2)

    inheritContainerCards = (70 / 100) * window.innerWidth - listWidth
  } else {
    containerCards = scrollX - Math.round(window.innerWidth / 2)
    inheritContainerCards = window.innerWidth - listWidth
  }

  if (inheritContainerCards > containerCards) {
    containerCards = inheritContainerCards - 60
  }

  setScrollX(containerCards)
}

export { handleLeftArrow, handleRightArrow }
