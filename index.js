
/*document.getElementById("orange").onclick=()=>{
   document.querySelector("body").style.backgroundColor="orange"
}


document.getElementById("green").onclick=()=>{
    document.querySelector("body").style.backgroundColor="green";

}
*/

function clickhandler(color){
  //  document.body.style.backgroundColor = `${color}`
  return function(){
    document.body.style.backgroundColor = `${color}`
  }
}

document.getElementById('orange').onclick = clickhandler("orange")
document.getElementById('green').onclick = clickhandler("green")
