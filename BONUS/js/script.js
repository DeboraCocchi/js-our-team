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
    image: 'img/voldemort.png',
    power: 10,
    features: ['carismatico', 'potentissimo', 'dislocato (mai sentito parlare di Horcrux?)']
  } ,
  {
    name: 'Bellatrix Lestrange',
    role: 'Chief Editor',
    image: 'img/bellatrix-lestrange.png',
    power: 8,
    features: ['pazza', 'sadica', 'ha l\'Avada Kedabra facile']
  } ,
  {
    name: 'Severus Piton',
    role: 'Office Manager',
    image: 'img/severus.jpeg',
    power: 9,
    features: ['elegante', 'doppiogiochista', 'profondo conoscitore di arti oscure']
  } ,
  {
    name: 'Peter Minus',
    role: 'Social Media Manager',
    image: 'img/Peter-minus.png',
    power: 5,
    features: ['viscido', 'trasfiguratore']
  } ,
  {
    name: 'Lucius Malfoy',
    role: 'Developer',
    image: 'img/Lucius.png',
    power: 6,
    features: ['affascinante', 'aristocratico', 'codardo']
  } ,
  {
    name: 'Igor Karkaroff',
    role: 'Graphic Designer',
    image: 'img/karkaroff.png',
    power: 7,
    features: ['delatore', 'vigliacco']
  } 

];

const row = document.querySelector('.row')
for(let member of team){
  let featuresList = '';
  for(let feature of member.features){
    console.log(member.features);
    featuresList += `<li>${feature}</li>`;
    console.log(feature)

  }
  let memberCard = `
  <div class="card dc-card m-2 col-3" style="height: 20rem;">
  <img src="${member.image}" class="card-img-top mt-2" alt="${member.name}">
  <div class="card-body">
    <h5 class="member-name text-danger">${member.name}</h5>
    <p class="member-role"><strong>Ruolo: </strong>${member.role}</p>
    <p class="power-level"><strong>Mago di livello: </strong>${member.power}</p>
    <h6><strong>Caratteristiche:</strong></h6>
    <ul>${featuresList}</ul>
    
  </div>
</div>
  `;
  row.innerHTML+=memberCard;
  

  
}

function addNewMember(){
  //da aggiungere membro attrabverso il form (che va poi resettato)
}