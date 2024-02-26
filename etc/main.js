var Canvas = document.getElementById('canvas');
var Ctx = canvas.getContext('2d');

canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-100;

var dino={
  x:10,
  y:200,
  width:50,
  height:50,
  draw(){
    Ctx.fillStyle='green';
    Ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}

var img1=new Image();
img1.src='./img/1.jpg'




  class Cactus{
    constructor(){
      this.x=500;
      this.y=200;
      this.width=50;
      this.height=50;
    }

    draw(){
      Ctx.fillStyle='red';
      Ctx.fillRect(this.x,this.y,this.width,this.height);
      Ctx.drawImage(img1,this.x,this.y);
    }
}

var cactus=new Cactus();
cactus.draw()
var timer =0;
var cactus여러개=[];
var 점프timer=0;
var animation;

//충돌 확인



function 프레임마다실행할거(){
  
  animation= requestAnimationFrame(프레임마다실행할거)
  timer++;

  Ctx.clearRect(0,0, canvas.width,canvas.height);
  if (timer%200===0) {
    var cactus=new Cactus();
    cactus여러개.push(cactus);

  }
  cactus여러개.forEach((a,i,o)=>{
    
    if(a.x<0){
      o.splice(i,1)
    }
    a.x--;

    충돌하냐(dino,a);
    
    a.draw();
  })
  if (점프중== true){
    dino.y-=1;
    점프timer++;
  }
  if (점프중== false){
    if(dino.y<200){
      dino.y++;
    }
  }
  if (점프timer> 100){
    점프중=false;
    점프timer=0
  }


  dino.draw()





}
프레임마다실행할거();

function 충돌하냐(dino,cactus){
  var x축차이=cactus.x-(dino.x+dino.width)
  var y축차이=cactus.y-(dino.y+dino.height)
  if(x축차이<0 && y축차이<0){
    Ctx.clearRect(0,0, canvas.width,canvas.height);
    cancelAnimationFrame(animation)
  }
}

var 점프중=false;

document.addEventListener('keydown',function(e){
  if(e.code==='Space'){
    점프중=true;
  }
})


