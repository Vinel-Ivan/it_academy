let number = 587;
const resultObj = {};
let result = Math.sqrt(number);
resultObj.floor = Math.floor(result);
resultObj.ceil = Math.ceil(result);

alert(`Full number = ${result} \nFloor number = ${resultObj.floor} \nCell number = ${resultObj.ceil}`);