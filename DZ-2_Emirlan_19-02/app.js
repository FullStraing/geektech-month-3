const block = document.querySelector(".block");

let postionX = 0;
let postionY = 0;

const move = () => {
  if (postionX <= 440 && postionY == 0) {
    postionX += 16;
    block.style.left = `${postionX}px`;
    setTimeout(move, 200);
  }
  else if (postionX >= 440 && postionY <= 440){
    postionY += 16;
    block.style.top = `${postionY}px`;
    setTimeout(move, 200);
  }
  else if (postionX == 0 && postionY <= 450){
    postionY -= 16;
    block.style.top = `${postionY}px`;
    setTimeout(move, 200);
  }
  else if (postionX <= 450 && postionY <= 450) {
    postionX -= 16;
    block.style.left = `${postionX}px`;
    setTimeout(move, 200);
  }
};
move();

// 2 ЗАДАНИЕ
const result = document.querySelector('#result')

let count = 0;
const interval = setInterval(() => {
  count++
  result.innerText = count;
  result.style.color = 'red'
  result.style.fontSize = '100px'
}, 1000, count);
    
setTimeout(() => {
  clearInterval(interval);
  result.innerText = 'FINISH'
}, 60000);