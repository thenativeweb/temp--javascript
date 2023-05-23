'use strict';

const colorPalette = [
    { name: 'red', code: '#ff0000' },
    { name: 'green', code: '#00ff00' },
    { name: 'blue', code: '#0000ff' }
];

const changeColor = function (colorPalette, color, replacementColor) {
    const changedPalette = [];

    for (const colorInPalette of colorPalette) {
        if (colorInPalette.name === color) {
            changedPalette.push(replacementColor);
            continue;
        }

        changedPalette.push(colorInPalette);
    }

    return changedPalette;
};

const changedColorPalette = changeColor(colorPalette, 'red', {
    name: 'cewe',
    code: '#c30c15'
});

console.log({ colorPalette, changedColorPalette });
