// Delay

function delayF(id, index) {
  let element = document.getElementById(id);
  let time = 0.2 + index 
  element.style.animation = "slide-funcs 1.2s both";
  element.style.animationDelay = `${time}s`;}

function delayO(id, index) {
  let element = document.getElementById(id);
  let time = 1.5+ index 
  element.style.animation = "slide-output 5s both";
  element.style.animationDelay = `${time}s`;}


let funcs = ['func0',"funcA", "funcRd", "funcRp"];

funcs.forEach(delayF);

let outputs = [ "outputA","outputRd", "outputRp"]

outputs.forEach(delayO)



// Programas 

function programs (id,program){
  let ids = document.getElementById(id);
  let element = document.createElement('i')
  element.className = `devicon-${program}-plain`
  element.innerHTML = `<span class="progm-name"> 
  ${program.toUpperCase()}</span>`
  ids.appendChild(element)
}

let progmsD = ['photoshop','illustrator','figma']

progmsD.forEach((item => {programs('outputRd',item)}))


let progmsP = ['python','javascript','css3','html5','github','sqlite']

progmsP.forEach((item)=>{programs('outputRp',item)})
