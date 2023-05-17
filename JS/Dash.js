// "use strict"

let noti_bt = document.getElementById('noti-button')
let notifi = document.querySelector('.notifications')
let msg_bt = document.getElementById('msg-button')
let message = document.querySelector('.message-notifications')

// function notification() {
//     if (notifi.style.display === "none") {
//         notifi.style.display = "block";
//         console.log("if notifi")


//     }
//     else if (message.style.display === "none") {
//         message.style.display = "block";
//         console.log("else if  mesaage ")


//     }
//     else {
//         notifi.style.display = "none";
//         message.style.display = "none";
//         console.log("else")

//     }
// }


function notification() {
    if (notifi.style.display === "none") {
        notifi.style.display = "block";
        message.style.display = "none";
        profile.style.display = "none";


        console.log("working")
    }
    else {
        notifi.style.display = "none";
        console.log("perfect")

    }

}


function msgNotification() {
    if (message.style.display === "none") {
        message.style.display = "block";
        notifi.style.display = "none";
        profile.style.display = "none";


        console.log("working")
    }
    else {
        message.style.display = "none";
        console.log("perfect")

    }

}


let btn = document.getElementById('profile')
let profile = document.querySelector('.profile-sec')
console.log(profile)
function PopUp() {
    if (profile.style.display === "none") {
        profile.style.display = "block";
        console.log("working")
        notifi.style.display = "none";
        message.style.display = "none";
    }
    else {
        profile.style.display = "none";
        console.log("perfect");
    }

}

let ham = document.querySelector("#hamburger")
let sidenav = document.querySelector("#sidenavbar")
let dash = document.getElementById("dash-nav")
let main_card = document.getElementById("main-cards")

ham.addEventListener("click", function () {
    if (sidenav.style.display === "none") {
        sidenav.style.display = "block"
        dash.style.marginLeft = "250px"
        main_card.style.marginLeft = "250px"

    }
    else {
        sidenav.style.display = "none"
        dash.style.marginLeft = "0"
        main_card.style.marginLeft = "0"
    }
})


let small = document.getElementById('hamburger-small')
let sidesmall = document.querySelector('.sidenavbar')
let grid = document.querySelector('.grid-container')

small.addEventListener("click", function () {
    if (sidesmall.style.display === "none") {
        sidesmall.style.display = "block";
        sidesmall.classList.add("newclass", "classitems", "classnewitems", "side-nav-span-text")

    }
    else {
        sidesmall.style.display = "none"
    }
})

let searchspan = document.getElementById('show-search')
let showhide = document.getElementById('hide')

searchspan.addEventListener("click", function () {
    showhide.classList.toggle('hide')
    showhide.style.zIndex = "500";
    showhide.style.position = "absolute";

})

//  let arr =[1,2,3,4,56]
//  let arr2= Math.min(...arr)
//  console.log(`${arr2} is a minimun number in array`)

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");


let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = ` conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg,#ededed 0deg)`
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed)
// function calcAge(birthyear) {
//     const now = 2037;
//     //  console.log(now)
//     if (now == 2036) {
//         // console.log(now)

//     }
//     else {
//         // console.log("now")
//     }
//     const age = now - birthyear;
//     //  console.log(age)
//     return age;

// }
// calcAge(1999)
// console.log(now)  // refrence error

// const myName = 'faisal'

// function first() {
// console.log(job) // refernce error
// const age = 30;
// if (age >= 30) {
//     const decade = 3;
//     var millenial=true;

// }

//     const arr = [1, 2, 3];

//     function second() {
//         const job = 'teacher';
//         console.log(`${myName} is a ${age} years old ${job}`)
//         // console.log(decade)
//         console.log(millenial)




//     }
//     second();

// }

// first();

// const a = 'jonas';
// first();

// function first() {
//     const b = 'hello';
//     second();

//     function second() {
//         const c = "hi";
//         third();
//     }

// }
// third()
//     function third() {
//         const d = 'hey'
//         console.log(d)
//     }

// const myName ='faisal';
// if (myName==='faisal'){
//     console.log(`faisal is  a ${job}`);
//     const age =2037-1989;
//     console.log(age);
//  var job='teacher'
//     console.log(x)
// }


// if(!numProducts)deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart(){
//     console.log('all products deleted')
// }
// console.log("not")
console.log(this)
// const calcAge = function(birthyear){
//     console.log(2020-birthyear);
    // console.log(this);
// };
// calcAge(1990)

// const calcAge = birthyear=>{
//     console.log(2024-birthyear);
//     console.log(this);
// };
// calcAge(1992)
//  const firstName='faisal';
//  var firstName='faisal';

//  const jonas ={
//     firstName:'jonas',
//     year:1991,
//     calcAge:function(){
//         console.log(this)
//         console.log(2030-this.year)

//     },
//     greet:()=>{
//         console.log(this)
//         console.log(`hey ${this.firstName}`) 
//     }
//  };
//  jonas.greet()