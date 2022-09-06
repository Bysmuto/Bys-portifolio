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

let funcC= ['funcC1','funcC2','funcC3']

funcC.forEach(delayF)

let ouputC = ['ouputc1','ouputc2','ouputc3']

ouputC.forEach(delayO)

