'use struct';
//create array to save a Buyer name
let buyerName = [];

//create a random to  generate the mobile's price as an integer random
function random(min, max) {
    return (Math.random()* (max- min +1)) - min;
}

//now create constructor fun for dynamic values
function Mobile(user, type) {
    this.user= user;
    this.user.type=type;
    this.price= random(100, 500);
    buyerName.push(this);
    this.conditionItem = condition();

    //call the fun that will save the info in the local
    setMyItem();
}
function condition() {
    if(this.price<200){
        this.conditionItem = 'Used';
    }
    if(this.price>=200){
        this.conditionItem='New';
    }
}
function setMyItem() {
    let stringItem = JSON.stringify(buyerName);
    localStorage.setItem('buyer' , stringItem);
}

//render the data from the form as a table
let table = document.getElementById('table');
let tRow = document.getElementById('tRow');
let tr = document.getElementById('tr');
Mobile.prototype.render = function(){
    // let tHeader = document.createElement('th');
    // tHeader.appendChild('table');
    let td = document.createElement('td');
    td.textContent = this.user;
    td.textContent = this.type;
    td.textContent = this.price;
    td.textContent = this.condition;

}

//the form
let form = document.getElementById('form');
form.addEventListener('submit', submitter);
function submitter(e) {
    e.preventDefult();


//new user
let nameOfBuyer = e.target.user.value;

let typeOfMobile = e.target.type.value;

let newBuyer = new Mobile(nameOfBuyer,typeOfMobile);
}

//the get fun


function getting() {
    let data = localStorage.getItem('buyerName');
    let parsedOb = JSON.parse(data);
    if(parsedOb){
        for (let i = 0; i < parsedOb.length; i++) {
            new Mobile(parsedOb[i].nameOfBuyer, parsedOb[i].typeOfMobile);
            
        }
    } 
}
getting()
for (let i = 0; i < buyerName.length; i++) {
    buyerName[i].render;
    
}