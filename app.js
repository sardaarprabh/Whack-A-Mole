const squares=document.querySelectorAll('.square');
const mole=document.querySelector('.mole');
const timeLeft=document.querySelector('#time-left');
const score=document.querySelector('#score');

let result=0;

let hitPosition=0;
let currentTime=60;
let timerId=null;
let countDownTimerId;



function randomSquare(){
  squares.forEach(square=>{
    square.classList.remove('mole')
  })

  let randomSquare=squares[Math.floor(Math.random()*9)];
  randomSquare.classList.add('mole');
  hitPosition=randomSquare.id;
}



 squares.forEach(square=>{
   square.addEventListener('mousedown',()=>{
      if(square.id==hitPosition){
        result++;
        score.textContent=" "+result;
        hitPosition=null;
      }
    })
 })



function moveMole(){
  timerId=setInterval(randomSquare,600);
  countDownTimerId=setInterval(countDown,1000);
}

  


const startButton=document.querySelector('.start');
startButton.addEventListener('click',moveMole,{once:true});

const resetButton=document.querySelector('.reset');
resetButton.addEventListener('click',()=>{
  window.location.reload();
  return;
});



function countDown(){
  currentTime--;
  timeLeft.textContent=currentTime;
  if(currentTime===-1){
    timeLeft.textContent=0;
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Game Finish!')
  }
  
}
 
