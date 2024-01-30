const obj = document.getElementById("box");
obj.addEventListener("mouseover",changeposition);
let viewheight = window.innerHeight;
let viewwidth = window.innerWidth;

function changeposition(){
    console.log("hit")
    let newleft = Math.floor(Math.random()*viewwidth)
    let newtop = Math.floor(Math.random()*viewheight)
     obj.style.marginTop = newtop+"px";
     obj.style.marginLeft = newleft+"px";
}