//object.assign() in ES6
// cloning the object of other object

let widget ={
    color:'red'
};

let cloneWidget = Object.assign({},widget);
console.log(cloneWidget);