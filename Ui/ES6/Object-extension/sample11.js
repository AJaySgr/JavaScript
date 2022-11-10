let sayHi = async()=>{return 'Hi'};

async function display(){
    let result = await sayHi();
    console.log(result);
}

display();