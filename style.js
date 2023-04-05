function users(name, age){
let obj = {
    name: name, 
    age: age
}
return obj;
}
function information(first, second) {
    if(first.age > second.age) {
        return first;
    }
    else {
        return second;
    }
}
let info1 = users("Vlad",22);
let info2 = users("Alina",32);
console.log(info1, info2);
let fn = information(info1, info2);
console.log(fn);