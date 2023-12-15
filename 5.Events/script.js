
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}



const clickOnSquare = (e) => {
  /*console.log(e.target.classList[1])
  console.log(getElapsedTime())*/

  const newDisplayedSquare = document.createElement('div')
  newDisplayedSquare.className = 'displayedsquare'
  newDisplayedSquare.classList.add(e.target.classList[1])
  const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper')
  displaySquareWrapper.appendChild(newDisplayedSquare)

  const color = e.target.classList[1]
  const actionLog = document.querySelector('ul')
  const newLog = document.createElement('li')
  newLog.textContent = `[${getElapsedTime()}] Created a new ${color} square`
  actionLog.appendChild(newLog)
}


const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

