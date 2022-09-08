// slides 

let s0 = ["designimgs/posts/0logo.png",];
let posts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
posts.forEach(element => {s0.push(`designimgs/posts/post (${element}).jpg`)});

let s1 = [];
let ogn = [1,2,3,4,5,7,8,9,10,11]
ogn.forEach(element => {s1.push(`designimgs/ogn/ogn (${element})_2.png`)});

let s2 = [];
let mda = [1,2,3,4,5,6,7]
mda.forEach(element => {s2.push(`designimgs/mda/mda (${element})_2.png`)});

let s3 = [];
let dmx = [1,2,3,]
dmx.forEach(element => {s3.push(`designimgs/dmx/dmx (${element})_2.png`)});

let s4 = ["designimgs/gus/gus (1).jpg"];
let gus = [1,2]
gus.forEach(element => {s4.push(`designimgs/gus/gus (${element})_2.png`)});

let s5 = [];
let pet = [1,2,5,6,7,8,9,10,11,12,13]
pet.forEach(element => {s5.push(`designimgs/pet/pet (${element})_2.png`)});

let descri = [
  `<span id='titulo'># Saúde mental importa</span> <br><br>
  Campanha personalizada motivada pelo Janeiro Branco, com o objetivo 
  de clarificar conceitos da saúde 
  mental através de posts com frases reflexivas <br><hr> `,
    
  `<span id='titulo'>OGN corretores orgânicos</span> <br><br>
  A empresa realizou uma reestruturação  
  e necessitava de uma nova identidade que fosse mais 
  moderna se encaixa-se nos padrões atuais, porém que ainda 
  recordasse a identidade já estabelecida ao longo de 20 anos 
  no mercado imobiliário da zona sul do Rio de Janeiro<br><hr>`,

  `<span id='titulo'>Mauro de Avila </span> <br><br>
  O cliente, um casal que esta na área de odontologia a anos, 
  precisava de uma identidade visual mais moderna e que 
  transmitisse a qualidade do seu trabalho<br><hr>`,

  `<span id='titulo'>DMX multimarcas</span> <br><br>
  O cliente precisava de uma identidade simples e 
  direta para seu novo negocio fisico e digital, 
  focado essencialmente na revenda de sapatos originais a
  preço de fábrica<br><hr>`,

  `<span id='titulo'>Guzmão imóveis</span> <br><br>
  O cliente precisava fosse elaborado de forma técnica a 
  ideia que teve para sua 
  logo de uma recém criada imobiliária<br><hr>`,

  `<span id='titulo'>Pet eternizado</span> <br><br>
  A cliente requeria de uma identidade visual
  que reproduzisse a natureza sentimental do seu projeto, que busca perpetuar a lembrança de animais de estimação já falecidos, transformando alguma parte
  deixada em peças de joias<br><hr> `

];

// -------------Adicionar a box e slides---------------------

let meuslide = ["S0", "S1", "S2", "S3", "S4",'S5'];

let boxes_names = ["b0", "b1", "b2", "b3", "b4",'b5'];

let boxes = [s0, s1, s2, s3, s4, s5];

creat_box("boxes", boxes_names);
function creat_box(id, lista) {
  let element = document.getElementById(id);
  lista.forEach((item, ind) => {
    element.innerHTML += `
    <div class="box" id= ${item}></div>
    <p class ='info'>${descri[ind]}</p>`;
  });
}

function creat(id, lista, n) {
  let element = document.getElementById(id);
  lista.forEach((img) => {
    element.innerHTML += `
  <img class="${meuslide[n]}" src="${img}" >
  <div class="bs">
  <button class="left" onclick="plusDivs(-1,${n})">&#10094;</button>
  <button class="right" onclick="plusDivs(+1,${n})">&#10095;</button>
  </div>`;
  });
}
// img dentro da box
boxes_names.forEach((item, index) => {
  const item2 = boxes[index];
  creat(item, item2, index);
});

// -------------Mover---------------------

var slideIndex = 1;
function showDivs(n, slide) {
  var i;
  var x = document.getElementsByClassName(slide);
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "inline";
}

meuslide.forEach((div) => {
  showDivs(slideIndex, div);
});

function plusDivs(n, ind) {
  meuslide.forEach((div, index) => {
    if (ind == index) {
      showDivs((slideIndex += n), div);
    }
  });
}
