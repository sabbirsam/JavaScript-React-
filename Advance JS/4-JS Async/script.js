/**
 * JavaScript Await Syntax
 * Await Syntax
 */

async function LoveandWar() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("Ok fine I will love you");
    });

    console.log(await myPromise);
}

LoveandWar(); // Ok fine I will love you