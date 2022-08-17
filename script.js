let grid = document.querySelector('#grid');
let number = 10; 
let size;
let deflt = number*number;

function box() {
    size = 500/number;
    for(let j = 0;j < deflt;j++){
        let div = document.createElement('div')
        div.style.height = size+'px'
        div.style.width = size+'px'
        grid.appendChild(div)
        div.setAttribute('id','pixel');   
     }   
}
box()
let boxes = document.querySelectorAll('#pixel')
function addcolor(){
    boxes.forEach(pixel => {
        pixel.addEventListener('mouseover',function(){
            pixel.style.background = 'black'})
    })}
addcolor()

function cleargrid() {
    boxes.forEach(pixel => {
        pixel.addEventListener('mouseover',function(){
            pixel.style.background = 'white'})
    })}
function changethegrid(){
  for(let j = 0;j < deflt;j++){
    let child = document.getElementById("pixel");
    grid.removeChild(child)
    }
    //number = document.getElementById('number').value;
   //box()
   addcolor()
}

///



    
