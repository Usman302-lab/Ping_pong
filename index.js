document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table");
  let ball = document.getElementById("ball");
  let paddle=document.getElementById("paddle");

  // here ball x and y will help us to set starting point of ball with respect to ping pong table

  let ballX = 50; //distance of left of ball w.r.t table
  let ballY = 50; //distance of top of ball w.r.t table

  let dx = 2; //displacemnet factor w.r.t to x->direction ->2 diplaced 2 px in +x direction -2 means displaced 2px in -x direction
  let dy = 2; //displacemnet factor w.r.t to y->direction ->2 diplaced 2 px in +y direction -2 means displaced 2px in -y direction

  ball.style.left = `${ballX}px`;
  ball.style.top=`${ballY}px`;

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;

    ball.style.left = `${ballX}px`;
    ball.style.top=`${ballY}px`;

    if(ballX > table.offsetWidth-ball.offsetWidth || ballX <=0 ) dx*=-1; //change x-axsis direction
    if(ballY>table.offsetHeight-ball.offsetHeight || ballY <=0) dy*=-1; //change y-axsis direction


    if(ballX<paddle.offsetLeft+paddle.offsetWidth &&
         ballY>paddle.offsetTop && 
         ballY+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight){
            dx*=-1;
         }
  }, 1);

  let paddleY=0; 
  let dPy=100 //displacment of paddle in y-direction

  document.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if(event.key==="ArrowUp" && paddleY >0){
        paddleY+=(-1)*dPy;
    }
    else if(event.key==="ArrowDown" && paddleY < table.offsetHeight-paddle.offsetHeight){
        paddleY+=dPy;
    }

    paddle.style.top=`${paddleY}px`
  })


  document.addEventListener("mousemove",(event)=>{
    let mouseDistanceFromTop=event.clientY;
    let distanceOfTableFromTop=table.offsetTop;
    let mousePointControl=mouseDistanceFromTop-distanceOfTableFromTop-paddle.offsetHeight/2;
    paddleY=mousePointControl;
    if(paddleY<=0 || paddleY>table.offsetHeight-paddle.offsetHeight) return;
    paddle.style.top=`${paddleY}px`

  })
});
