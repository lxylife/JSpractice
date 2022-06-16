


let animal = {
    eats : true,
     walk(){
        alert("ff55555fff")
     },
};
let rabbit = {
    jumps : true,
    __proto__: animal,
};
rabbit.walk = function(){
    alert(
        "dfsafaffdaf "
    )
}
let descriptor = Object.getOwnPropertyDescriptor
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

fetch(url , {
    credentials: "include"
})