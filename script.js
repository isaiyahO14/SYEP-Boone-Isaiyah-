const reviews = [
     {
        id: 1,
        name: 'Susan Smith',
        job: 'tech',
        img: '#',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
     },
     {
        id: 2,
        name: 'Beth mailen',
        job: 'teached',
        img: '#',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
     },
     {
        id: 3,
        name: 'bella ortega',
        job: 'none',
        img: '#',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
     }
];

const img = document.getElementById('persin-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySeldctor('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function () {
   const item = reviews[currentItem];
   img.src = item.img
   author.textContent = item.name
   job.textContent = item.job
   info.textContent = item.text
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function (){
    currenrItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem);
});






/* console.log("Hello World");
/*
//String has quotes/Number no quotes
let myTest ="123";
console.log(typeof myTest);

consel.log(10 + " eggs");
consel.log(10 + 8 + " eggs");
console.log("eggs " + 10 + 8);

//Both conditions need to be true
console.log(7>3)&&(5>2);

//Only one condition must be true
console.log(10>3)||(10>12);

//Logical not
console.log(!5>3);

function introduction(name,age){
    console.log("Hello, my name is "+ name + " and I am "+ age + "years old.");
}

introduction("isaiyah", 14)*/ 

/* const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning 🌅";
}else if (hour<18){
    greeting = "Good afternoon 🌥";
}else{
    greeting = "Good evening 🌙";
}

document.getElementById("greeting").innerText = greeting;