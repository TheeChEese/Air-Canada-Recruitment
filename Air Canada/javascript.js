//toggle nav bar (airplane icon)
//Air plane toggle
function toggleNav() {
  const nav = document.querySelector('.ok');
  nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

//color theme change
function changeColorScheme() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor.background;
  document.body.style.color = randomColor.text;
  document.querySelector('header').style.backgroundColor = randomColor.header;
  document.querySelector('.ok').style.backgroundColor = randomColor.nav;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  const color = '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
  return {
      background: color,
      text: invertColor(color),
      header: invertColor(color),
      nav: invertColor(color)
  };
}

function invertColor(hex) {
  return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}


// reviews
const reviews = [
{
id: 1,
name: 'Sara Lowa',
job: 'Flight attendant',
img: 'https://i.imgur.com/AJTetxy.png',
text: "The most diverse and friendly workplace I've ever been to. Awesome pension too!",
},
{
id: 2,
name: 'Jason Mcdonald',
job: 'Pilot',
img: 'https://i.imgur.com/c9eOuLh.jpg',
text: 'Air Canada has pretty flexible hours and a very friendly atmosphere. But work ethich is vital.',
},
{
id: 3,
name: 'Mercy Habill',
job: 'Customer Service',
img: 'https://i.imgur.com/ryWVX6Z.jpg',
text: 'Although hours can be stressfull, the work is overall rewarding, and I benefited a lot from their trainee program.',
},
{
id: 4,
name: 'Bill Anderson',
job: 'Technical Maintenance',
img: 'https://i.imgur.com/rZjjWYY.jpg',
text: 'The most rewarding part of working in Air Canada is its experience. The connections I made in here  worth all the training I had.',
},

];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
const item = reviews[currentItem];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
const item = reviews[person];
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
img.src = item.img;




}
// show next person
nextBtn.addEventListener('click', function () {
currentItem++;
if (currentItem > reviews.length - 1) {
currentItem = 0;
}
showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
currentItem--;
if (currentItem < 0) {
currentItem = reviews.length - 1;
}
showPerson(currentItem);
});

//show first person
startBtn.addEventListener('click', function () {
currentItem = 0;
showPerson(currentItem);
});


//show last person
endBtn.addEventListener('click', function () {
currentItem = 3;
showPerson(currentItem);
});

//counter
function updateCounter(value) {
  counter += value;
  const counterElement = document.getElementById('counter');
  counterElement.innerText = counter;

  if (counter > 0) {
      counterElement.style.color = 'white';
  } else if (counter < 0) {
      counterElement.style.color = 'red';
  } else {
      counterElement.style.color = 'black';
  }
}

function resetCounter() {
  counter = 0;
  document.getElementById('counter').innerText = counter;
  document.getElementById('counter').style.color = 'black';
}

//random
//Congradulations! You are our 9,999th prospective applicant this month. Visit // for a little surprise

function showAlert() {
alert("Congradulations! You are our 9,999th prospective applicant this month. Visit https://aircanada.com/special/prize for a little surprise!");
}