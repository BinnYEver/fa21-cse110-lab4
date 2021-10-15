function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething(num) {
    return num * 2;
}
var returnArray = [];
returnArray = modifyArray([1, 2, 3], doSomething);
for (var one in returnArray) {
    console.log(one, ": ", returnArray[one]);
}