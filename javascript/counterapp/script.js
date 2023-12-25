//document.getElementById("counter").innerHTML = 5
let countNum = 0;
function increment(){
    countNum++;
    document.getElementById("counter").textContent=countNum;
}
function decrement(){
    if (countNum > 0){
        countNum--;
    }else{
        countNum = 0;
    }
    document.getElementById("counter").textContent=countNum;
}
function save(){
    let connti = countNum + " - ";
    document.getElementById("print btn").textContent += connti;
    countNum = 0;
    document.getElementById("counter").textContent = countNum

}

// let welcome= document.getElementById("print btn");
// let name = "Michael ";
// let greeting = "hello there";
// welcome.innerHTML = name + greeting;
// welcome.innerHTML +=" emoji"
