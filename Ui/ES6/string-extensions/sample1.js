const title='jack and jill went up the hill';
console.log(title.startsWith('jac')); //true
console.log(title.startsWith('Jack')); //false
console.log(title.startsWith('jill',9)); //true

console.log('========================================');
console.log(title.endsWith('hill')); //true
console.log(title.endsWith('Hill')); //false
console.log(title.endsWith('up',21)); //true
