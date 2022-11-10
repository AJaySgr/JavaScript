class person{
    constructor(name){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        newName = newName.trim();
        this._name=newName;
    }

}

let p = new person("Bhoolu");
console.log(p.name);

p.name="ChanderChur Chauhan";
console.log(p.name);