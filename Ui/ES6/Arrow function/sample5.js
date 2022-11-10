// let setColor = function(color){
//     return {value : color};
// }

let setColor = color =>({value:color});
let bgColor = setColor('red');
console.log(bgColor);
console.log(bgColor.value);