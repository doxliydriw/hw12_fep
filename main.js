const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}


function generateKey(length, lst) {
    var str = ''
    for (let i = 0; i < length; i++) {
        str += lst[getRandomInt(0, lst.length - 1)]
    }
    return str
}


const key = generateKey(6, characters)
console.log(key); // eg599gb60q926j8i