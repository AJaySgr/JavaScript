class person{
    constructor(name){
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    setName(newName){
        newName=newName.trim();
        this.name=newName;
    }
}

let p = new person("       Shabhsamu Rao");
console.log(p.name);