function make2DArray(cols,rows){
  let arr =new Array(cols);
  for (let i = 0; i < array.length; i++) {
    arr[i] = new Array[rows];
  }
  return arr;
}

let grid;
let w=10;
let cols,rows

function setup(){
  CreateCanvas(400,400);
  cols =width/w;
  rows =height/w;
  grid=make2DArray(cols,rows);

  for (let i = 0; i < cols; i++) {
    for (let j= 0; j < rows; j++) {
      grid[i][j]=0;
    }
  }
  grid[20][10]
}
function draw(){
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j= 0; j < rows; j++) {
      stroke(225);
      fill(grid[i][j]*255);
      let x= i * w;
      let y= j * w;
      square(x,y,w);
    }
  }
  let nextGrid=make2DArray(cols,rows)
  for (let i = 0; i < cols; i++) {
    for (let j= 0; j < rows; j++) {
      let state =grid[i][j];
      if(state ==1){
        let below =grid[i][j];
        if (below==0){
          nextGrid[i][j]
        }
      }
      }
  }
}