export default function mirror(list) {
    const array = list;
    let arrayMirror = [];

    for (let i = 0; i < array.length; i++) {
        arrayMirror.push(array[i]);

    }
    for (let i = array.length - 2; i >= 0; i--) {
        arrayMirror.push(array[i]);
    }
    return arrayMirror;
}

console.log(mirror([1,]));