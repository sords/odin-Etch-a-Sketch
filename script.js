let grid = document.querySelector('#grid');
let number = document.getElementById('number');
let pixels = document.querySelectorAll('#pixel');
let pixelscount = 0;
let previous;
let color = document.getElementById('favcolor')

function box(num) {
    if (num > 100 || num <= 0) {
        alert('please enter between 0 and 100')
    } else {
        if (pixelscount >= 1) {
            for (let j = 0; j < previous; j++) {
                let child = document.getElementById("pixel");
                grid.removeChild(child)
                pixelscount -= 1;
            }
        }
        for (let j = 0; j < num * num; j++) {
            let div = document.createElement('div')
            div.style.height = (500 / num) + 'px'
            div.style.width = 500 / num + 'px'
            grid.appendChild(div)
            div.setAttribute('id', 'pixel');
            pixelscount += 1;
        }
        previous = pixelscount;
        addcolor()
    }
}
function addcolor() {
    let pixels = document.querySelectorAll('#pixel')
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.style.background = `${color.value}`;
        })
    })
}
function Earasegrid() {
    let pixels = document.querySelectorAll('#pixel')
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.style.background = 'white'
        })
    })
}
function cleargrid() {
    let pixels = document.querySelectorAll('#pixel')
    pixels.forEach(pixel => {
        pixel.style.background = 'white'

    })
    addcolor()
}

function random() {
    let pixels = document.querySelectorAll('#pixel')
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        })
    })
}

box(number.value);