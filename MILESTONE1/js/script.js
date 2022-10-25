/*
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

*/

const team = [

  {
    name: 'Lord Voldemort',
    role: 'Founder & CEO',
    image: '../img/voldemort.png'
  } ,
  {
    name: 'Bellatrix Lestrange',
    role: 'Chief Editor',
    image: '../img/bellatrix-lestrange.png'
  } ,
  {
    name: 'Severus Piton',
    role: 'Office Manager',
    image: '../img/severus.png'
  } ,
  {
    name: 'Peter Minus',
    role: 'Social Media Manager',
    image: '../img/Peter-minus.png'
  } ,
  {
    name: 'Lucius Malfoy',
    role: 'Developer',
    image: '../img/Lucius.png'
  } ,
  {
    name: 'Igor Karkaroff',
    role: 'Graphic Designer',
    image: '../img/karkaroff.png'
  } 

];

for(let member of team){
  console.log(member);
}