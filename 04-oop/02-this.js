'use strict';

const externalBark = function (isLoud = false) {
    let message = 'Wau wau! ' + this.name;
    if (isLoud) {
        message = message.toUpperCase();
    }
    console.log(message);
};

const alice = {
    name: 'Alice',
    bark: externalBark
};

const muffin = {
    name: 'Muffin',
    bark: externalBark
};

// 1. Method invocation
//    - this zeigt auf das Objekt, an dem die Funktion aufgerufen wurde
alice.bark();
muffin.bark();

// 2. Function invocation
//    - Ohne Strict-Mode: this entspricht dem globalen Objekt, d.h. im Browser ist das das window-Objekt
//    - Mit Strict-Mode: this ist undefined (=> *immer* den Strict-Mode verwenden ;-))
externalBark();

// 3. Call invocation
//    - this zeigt auf das Objekt, das als Argument übergeben wird
//    - Alle weiteren Argumente werden an die Funktion durchgereicht
const ella = {
    name: 'Ella'
};
externalBark.call(ella, true);

// 4. Apply invocation
//    - this zeigt auf das Objekt, das als Argument übergeben wird
//    - Das Array wird als Argumente an die Funktion durchgereicht
externalBark.apply(ella, [ true ]);
