let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function(sum, current){
    return sum + current;
});

alert (result);