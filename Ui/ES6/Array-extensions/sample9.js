const products =[
    {name:'Phone',price: 999},
    {name:'Iphone',price: 1999},
    {name:'Computer',price: 999},
    {name:'Tablet',price: 999},
];

const index=products.findIndex(product => product.price>1000);
console.log(index);
