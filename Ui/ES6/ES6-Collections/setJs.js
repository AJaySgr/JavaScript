let chars = new Set(['a','b','c','d','a','b','c','e']);

console.log(chars);
console.log("Type of ",typeof(chars));
console.log("Comaprison",chars instanceof Set);
console.log("Totol Element is set : ",chars.size)



chars.add('w');
chars.add('a');
//mutiple add
chars.add(2)
    .add(3);

console.log(chars);

//Check a is present in the set

let exist =  chars.has("a");
console.log("is A present in Set : ",exist);
  
let isexist = chars.has("q");
console.log("is q present in Set : ",isexist);

chars.delete('e');
console.log("Afetr the deletion of `e` ",chars);

console.log("Clear the set",chars.clear()); //return undefined
console.log(chars);
