
const button = document.getElementById("btn")

let positionX = 0
let positionXY = 0
let positionY = 0

button.addEventListener("click", () => {
    const block = document.querySelector(".block")
    const smallBlock = document.querySelector(".smallBlock")

    const runBlockToLeft = () => {
        if (positionX < (block.clientWidth - smallBlock.clientWidth)) {
            positionX += 16
            smallBlock.style.left = positionX + "px"
            console.log(`left: ${positionX}`)
            runBlockToLeft()
        }
    }
    const runBlockToDown = () => {
        if (positionY < (block.clientHeight - smallBlock.clientHeight)) {
            positionY += 16
            smallBlock.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToDown()
        }
    }
    const runBlockToRight = () => {
        if (positionXY < positionX) {
            positionXY += 16
            smallBlock.style.left = `${positionX - positionXY}px`
            console.log(`right: ${positionXY}`)
            runBlockToRight()
        }
    }
    const runBlockToUp = () => {
        if (positionY > 0) {
            positionY -= 16
            positionX -= 16
            positionXY -= 16
            smallBlock.style.left = positionX + "px"
            smallBlock.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToUp()
        }
    }
    if (positionX < (block.clientWidth - smallBlock.clientWidth)) {
        runBlockToLeft()
    } else if (positionXY >= (block.clientWidth - smallBlock.clientWidth)) {
        runBlockToUp()
    } else if (positionY >= (block.clientHeight - smallBlock.clientHeight)) {
        runBlockToRight()
    } else if (positionX >= (block.clientWidth - smallBlock.clientWidth)) {
        runBlockToDown()
    }
});