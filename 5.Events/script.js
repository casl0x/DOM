const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

document.body.addEventListener('keypress', (e) => {
  if (e.code === 'Space') {
    document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`

    const actionLog = document.querySelector('ul')
    const newLog = document.createElement('li')
    newLog.textContent = `[${getElapsedTime()}] Spacebar was pressed to change background color`
    actionLog.appendChild(newLog)
  } else if (e.key === 'l') {
    const actionLog = document.querySelector('ul')
    actionLog.innerHTML = ''
  } else if (e.key === 's'){
    const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper');
    displaySquareWrapper.innerHTML = '';
  }
})

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

  newDisplayedSquare.addEventListener('click', () => {
    alert(`This square is ${color}`)
  })
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

