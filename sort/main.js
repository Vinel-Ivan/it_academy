let arr = [10, 20, 30, 50, 235, 3000]
arr.forEach (function(item) {
    if (String(item).search(/(1|2|5)/) === 0) {
    console.log(item);
    }
})