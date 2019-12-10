let direction = 'right';
let offset = 0;

$('h1').offset({ left: offset }).offset({ top: offset });

const squareAnimation = function() {
    if (direction === 'right') {
        $('h1').offset({ left: offset });
        offset++;
        if (offset > 250) {
            offset = 0;
            direction = 'down';
        }
    } else if (direction === 'down') {
        $('h1').offset({ top: offset });
        offset++;
        if (offset > 250) {
            offset = 250;
            direction = 'left';
        }
    } else if (direction === 'left') {
        $('h1').offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 250;
            direction = 'up';
        }
    } else if (direction === 'up') {
        $('h1').offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'right';
        }
    }
};

let intervalLength = 30;
setInterval(squareAnimation, intervalLength);
let clicks = 10;

const speedUpIntervalFunc = function() {
    intervalLength -= 5;
    clicks--;
    $('h1').text(clicks);
    if (clicks < 1) {
        for (let i = 1; i <= 10; i++) {
            clearInterval(i);
        }
        $('h1').text('You win!');
    } else {
        setInterval(squareAnimation, intervalLength);
    }
};

$('h1').click(speedUpIntervalFunc);