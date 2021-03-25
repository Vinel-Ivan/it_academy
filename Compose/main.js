let arr = [2, 3, 4, 5];
let result = arr.reduce(function(comp, current){
    return comp * current;
});

alert (result);