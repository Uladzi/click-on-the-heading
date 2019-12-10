let direction = 'right';
let offset = 0;

$('img').offset({ left: offset }).offset({ top: offset });

const squareAnimation = function() {
    if (direction === 'right') {
        $('img').offset({ left: offset });
        offset++;
        if (offset > 250) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $('img').offset({ top: offset });
        offset++;
        if (offset > 250) {
            offset = 250;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $('img').offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 250;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $('img').offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

let intervalLength = 30;
const intervalID = [setInterval(squareAnimation, intervalLength)];
let clicks = 10;

const speedUpIntervalFunc = function() {
    $('img').fadeOut(50).fadeIn(50);
    intervalLength -= 5;
    clicks--;
    $('h1').text(clicks);
    if (clicks < 1) {
        for (let i = 0; i < intervalID.length; i++) {
            clearInterval(intervalID[i]);
        }
        $('h1').text('You win!');
    } else {
        intervalID.push(setInterval(squareAnimation, intervalLength));
    }
};

$('img').click(speedUpIntervalFunc);