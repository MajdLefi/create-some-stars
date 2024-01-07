'use strict';

let canvas;
let ctx;
canvas = document.querySelector('#myCanvas');
ctx = canvas.getContext('2d');

function getMousePosition(event)
{
    const offset = canvas.getBoundingClientRect();
    const styles = window.getComputedStyle(canvas);
    const position = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    };

    return position;
}

function createStar(event)
{
    const position = getMousePosition(event);
    const radius = getRandomMinMax(15,45);
    const color = getRandomRgbColor();
    const star = new Star();
    star.setRadius(radius);
    star.setPosition(position);
    star.setColor(color);
    star.draw(ctx);
}


canvas.addEventListener('click', createStar);
