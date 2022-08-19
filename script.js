let grid = document.querySelector('#grid');
let number = document.getElementById('number');
let boxes = document.querySelectorAll('#pixel');



function box(num) {
    console.log(num)
    console.log(number.value)
     
     let box = boxes.length;
     console.log(boxes.length,1,box)


    if (box > 0) {
        for (let j = 0; j < num * num; j++) {
            let child = document.getElementById("pixel");
            grid.removeChild(child)
            box--;
            console.log(box,99)
        }
    } //else {
        for (let j = 0; j < num * num; j++) {
            let div = document.createElement('div')
            div.style.height = 500 / num + 'px'
            div.style.width = 500 / num + 'px'
            grid.appendChild(div)
            div.setAttribute('id', 'pixel');
            box++;
            
       // }

    }
    console.log(boxes.length,2,box)
}

    box(number.value)





/*function changethegrid(num) {
    for (let j = 0; j < num*num; j++) {
        let child = document.getElementById("pixel");
        grid.removeChild(child)
    }
    let numbe = document.getElementById('number');
    box(numbe.value);
}

function addcolor() {
    boxes.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.style.background = 'black'
        })
    })
}

function cleargrid() {
    boxes.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.style.background = 'white'
        })
    })
}

addcolor()
*///
