'use strict';

function getRandomMinMax(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRgbColor()
{
    const red = getRandomMinMax(0, 255);
    const blue = getRandomMinMax(0, 255);
    const green = getRandomMinMax(0, 255);
    const opacity = Math.random();
    return `rgba(${red},${blue},${green},${opacity})`;  
}