function  createBoard(sqaureNum = 500) {
    const board = document.querySelector('#board')
    for (let i = 0; i < sqaureNum; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => setColor(square))
        square.addEventListener('mouseleave', () => removeColor(square))
        board.append(square)
        
    }
    function getRandomColor() {
        const colors = ['red', 'blue', 'yellow', 'pink', 'aqua']
        const i = Math.floor(Math.random() * colors.length)
        return colors[i]
    }
    function setColor(square) {
        console.log(1)
        const color = getRandomColor()
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
    function removeColor(square) {
   
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #1d1d1d'
    }
}
createBoard()