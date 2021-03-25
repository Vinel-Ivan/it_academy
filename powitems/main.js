let arr = [4, 2, 5, 19, 13, 0, 10];

let powedArr = arr.map (function(x) {
    return Math.pow(x,3);
})

let sum = powedArr.reduce(function(sum, current){
    return sum + current;
})

let result = Math.sqrt(sum);

alert (result);