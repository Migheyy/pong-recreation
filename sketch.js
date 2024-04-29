 //variáveis
let xball = Math.floor(Math.random()*300)+50;
let yball = Math.floor(Math.random()*300)+50;

//velocidade
let BallVelX=6;
let BallVelY=4;

//posições da raquete
let xPlayer=5;
let yPlayer=150;

//posições da raquete
let xBot=585;
let yBot=150;
let BotVelY=4;

var scorePlayer = 0;

var scoreBot = 0;



var status = "inicio";

function preload() {
}

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.center();
}


function draw() {
  
  background("black");
  player(xPlayer, yPlayer);
  movimentoPlayer();
  bola();
  verificarBolaCol();
  bot();
  movimentoBot()
  verificarRaqueteCol();
  verificarOponenteCol();
  verificarStatus();
  pontuacao();
}

function bola() {
    rect(xball, yball, 15,15);
}

function player(x, y){
  rect(xPlayer, yPlayer, 15, 140);
} 

function bot(x, y){
  rect(xBot, yBot, 15, 140);
} 


function movimentoPlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer = yPlayer - 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yPlayer = yPlayer + 10;
  }
}

function movimentaBall(){
  xball += BallVelX;
  yball += BallVelY;
}

function verificarBolaCol(){
  //if(xball+7.5>width || xball-7.5<0){
  //  BallVelX *= -1;
  //}
  if(yball+7.5>height || yball-7.5<0){
    BallVelY *= -1;
  }
}

function verificarRaqueteCol(){
  if(xball-7.5<xPlayer+15 && yball-7.5<yPlayer+145 && yball-7.5>yPlayer){
    BallVelX *= -1;
  }
}

function movimentoBot(){
  oponenteVelY = yball-yBot-100;
  yBot += oponenteVelY;
}


function verificarOponenteCol(){
  if(xball+7.5>xBot-7.5 && yball-7.5<yBot+145 && yball-7.5>yBot){
    BallVelX *= -1;
  }


}

function mousePressed(){
  if (status == "fim"){
    xball = 300;
    yball = 200;
    BallVelX=6;
    BallVelY=4;
    xPlayer=5;
    yPlayer=150;
    xBot=585;
    yBot=150;
    BotVelY=4;
    scorePlayer = 0;
    scoreBot = 0;
    //chanceErrar = 0;
    status = "inicio"
  }
  else if (status == "inicio"){
    status = "game";
  }
}

function verificarStatus(){
  if (status == "fim"){
    movimentaBall();
  }
  else if (status == "game"){
    movimentaBall();
  }
}

function pontuacao(){
  fill("white");
  textSize(30);
  text("Pontos: " + scorePlayer, 400, 30);
  text("Pontos: " + scoreBot, 70, 30);
  
  if(xball<0){
    scoreBot = scoreBot +1;
    xball = 275;
    yball = 175;
  }
  else if (xball>600){
    scorePlayer = scorePlayer +1;
    xball = 275;
    yball = 175;
  }
  if(scoreBot==10){
    status = "fim";
    console.log("game over");
    fill("white");
    textSize(20);
    text("game over! - Clique para jogar novamente",120,200);
    xball = 275;
    yball = 175;
  }
  else if(scorePlayer==10){
    status = "fim";
    console.log("game over");
    fill("white");
    textSize(20);
    text("game over! - Clique para jogar novamente",120,200);
    xball = 275;
    yball = 175;
  }
}