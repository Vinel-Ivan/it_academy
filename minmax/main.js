let string = '4,-2,5,19,-130,0,10';
let strArray = string.split(',');
let min = Math.min.apply(null, strArray);
let max = Math.max.apply(null, strArray);

alert(`Minimum number: ${min} \nMaximum number: ${max}`)