// let array = [1,5,5,8,4,9,7]

// array.forEach(element => {
// console.log(element * 2);
// });

// let filter=array.filter(element => element >=5);
// console.log(filter);

// let map = array.map(element => element*3);
// console.log(map);

// array.sort((a,b) =>{
//     if(a>b){
//         return -1;
//     }else if(b>a){
//         return 1;
//     }else{
//         return 0;
//     }
// });
// console.log(array);

// // სავარჯიშო 7:

// // 1.	let planets = [“Venus”, “Earth”, “Mars”, “Jupiter”, “Saturn”, “Uranus”, “Neptune”];
// // forEach () მეთოდის გამოყენებით დაბეჭდეთ მასივის ყველა ელემენტი (მაგ.: “პლანეტის სახელია: Venus”.

// let planets = ['Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
// planets.forEach(element=> console.log(element));



// // 2.	let ocean = [“Atlantic”, “Pacific”, “Indian”, “Arctic”];
// // forEach () მეთოდის გამოყენებით დაბეჭდეთ მასივის ყველა ელემენტი და თითოეული ელემენტის შესაბამისი ინდექსი (მაგ.: “ოკეანის სახელია: Atlantic; მისი ინდექსია: 0;).

// let ocean=['Atlantic' , 'Pacific', 'Indian', 'Arctic'];
// ocean.forEach((element,i)=> console.log(element,i));

// // 3.	let color = [“Red”, “Pink”, “Orange”, “Yellow”, “Purple”, “Green”];
// // filter () მეთოდის გამოყენებით დააბრუნეთ ახალი მასივი (newColor), რომელშიც იქნება ძველი მასივის მხოლოდ ის ელემენტები, რომელთა სიგრძე მეტია 5-ზე;

// let color=['red', 'pink', 'orange', 'yellow', 'purple', 'green'];
// let newColor=color.filter(element => element.length>=5);
// console.log(newColor);

// // 4.	let numberArray = [3, 7, 9, 15, 65, 38];
// // filter () მეთოდის გამოყენებით დააბრუნეთ მასივი, რომელშიც იქნება ძველი მასივის მხოლოდ ის ელემენტები, რომელებიც მეტია 18-ზე;

// let numberArray = [3, 7, 9, 15, 65, 38];
// let numbera=numberArray.filter(elem=>elem>18);
// console.log(numbera);

// // 5.	შექმენით რიცხვების მასივი და მისი თითოეული ელემენტი აიყვანეთ კვადრატში, ისე რომ ამავე მასივმა დააბრუნოს თავდაპირველი რიცხვები კვადრატში;

// let array1=[2,4,5,3];
// array1.forEach(elem=>console.log(elem*elem));

// // 6.	let numbers = [20, 15, 6, 9, 30];
// // map () მეთოდის საშუალებით შექმენით ახალი მასივი, ისე რომ მასში იყო numbers მასივის თითოეული ელემენტი განახევრებული (მაგ.: 20- ს ნაცვლად ეწეროს 10); 

// let numbers = [20, 15, 6, 9, 30];
// let numbers1=numbers.map(elem=>elem/2);
// console.log(numbers1);

// // 7.	let growth = [8, 40, 2, 87, 33, 7, 0];
// // ზრდადობის მიხედვით დაალაგეთ მოცემული მასივის ელემენტები;

// let growth = [8, 40, 2, 87, 33, 7, 0];
// growth.sort((a,b)=>a-b);
// console.log(growth);

// // 8.	მეშვიდე დავალებაში მოცემული მასივის თითოეული ელემენტი გააორმაგეთ ქვემოთ მოცემული ფუნქციისა და map() მეთოდის საშუალებით. შედეგის სანახავად კონსოლში დაბეჭდეთ მასივის სახელი;
// function doubler (x){
//     return x*2
// }

// let growth2=growth.map(elem =>doubler(elem));
// console.log(growth2);

// // 9.	მოცემულია Names  მასივი, რომლის თითუოეულ წევრსაც აქვს ზედმეტი დაშორებები. 
// // let Names = [" avengers", "   captain_america", "iro  nman   ", " black panther   "]
// // 	დაწერეთ ფუნქცია რომელიც map მეთოდის გამოყენებით დააბრუნებს ახალ მასივს გამოტოვებების გარეშე.
// // 	index.html-ში შექმენით p თეგი, რომელიც იგივე ფუნქციის საშუალებით  ფეიჯზე გამოიტანს მასივის მენულე ელემენტს გამოტოვებების გარეშე.

// let Names = [" avengers", "   captain_america", "iron  man   ", " black panther   "];
// let Names1 = Names.map(element=>element.trim());
// document.querySelector('p').innerHTML=Names1[0];
// console.log(Names1);

// // 10.	const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// // მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ ის სიტყვები რომლებიც 6 ან მეტი ასოსგან შედგება.

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// inputWords.forEach(element=>{if(element.length>=6){
//     console.log(element);
// }})

// // 11.	let numbers = [1,2,3,4,5,6,7,8,9,10];
// // მოცემული მასივიდან filter, map …მეთოდების დახმარებით კონსოლში გამოიტანეთ:
// // 	ციფრების მასივი,  რომლებიც იყოფიან 2-ზე;
// // 	ციფრების მასივი,  რომლებიც იყოფიან 2-ზე ან 5-ზე;
// // 	კონსოლში გამოიტანეთ იმ რიცხვების კვადრატების მასივი, რომლებიც იყოფიან 3-ზე;
// // 	კონსლოში გამოიტანეთ იმ რიცხვების კვადრატების მასივი, რომლებიც იყოფიან 5-ზე;

// let numbersNew = [1,2,3,4,5,6,7,8,9,10];
// let first = numbersNew.filter(elem=> elem%2==0);
// let second = numbersNew.filter(elem=>elem%2==0 || elem%5==0);
// let third = numbersNew.filter(elem=> elem%3==0).map(elem=>elem*elem);
// let fourth = numbersNew.filter(elem=> elem%5==0).map(elem=>elem*elem);

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// // 12.	let nums = [11, 226, 33, 46, 75, 86, 97, 98, 22]; მოცემული მასივიდან კონსოლში გამოიტანეთ რიცხვი რომელიც მეტია 35-ზე (find მეთოდის გამოყენებით);

// let nums = [11, 226, 33, 46, 75, 86, 97, 98, 22];
// console.log(nums.find(elem=>elem>35));

// // 13.	დაწერეთ ფუნქცია, რომელიც წინა დავალებაში მოცემული მასივის თითოეულ წევრს   გაამრავლებს 5-ზე;

// let nums1 = nums.forEach(elem=> elem*5);

// // 14.	let newNumbers =[5,84,62,18,34];
// // მოცემული მასივიდან თითოეული წევრის 3-ზე ნამრავლი უნდა  დაიფუშოს newArr მასივში, რომელიც ელემენტების ჩამატებამდე იქნება ცარიელი. (გამოიყენეთ forEach მეთოდი).

// let newNumbers =[5,84,62,18,34];
// let newArr=[];
// newNumbers.forEach(elem=>newArr.push(elem*3))
// console.log(newArr);

// // 15.	let allArr = [“rema” , ”gundi” , ”nand” , “ara?”];
// // მოცემული მასივიდან foreach მეთოდის საშუალებით ახალ ცარიელ მასივში დაფუშეთ მასივის თითეული წევრის მხოლოდ პირველი და ბოლო სიმბოლო. უნდა მიიღოთ: “ra”,  ”gi” ….

// let allArr = ['rema' , 'gundi' , 'nand' , 'ara?'];
// let allNew = [];
// allArr.forEach(elem=>allNew.push(elem[0]+elem[elem.length-1]));
// console.log(allNew);


//////////////////////////////////
//////////////counter////////////
let count=0;
let p = document.querySelector('p');
p.innerHTML=count;

let inc=document.getElementById('inc');
let dec=document.getElementById('dec');
let res=document.getElementById('res');
let color = document.getElementById('color');
let input = document.getElementById('input');
let input1 = document.getElementById("input_container");

function increase(){
    count++;
    p.innerHTML=count;
    return count;
}

function decrease(){
    count--;
    p.innerHTML=count;
    return count;
}

function reset(){
    count=0;
    p.innerHTML=count;
    return count;
}

function colorChange(){
    document.querySelector('body').style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`
}

function search(){
    input.style.width='200px';
}

input1.addEventListener('click', search)
inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
res.addEventListener('click', reset);
color.addEventListener('click', colorChange);





// გამეორება: 
 
// 1. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
// 2.შექმენით ფუნქცია printNumbers() , რომელიც დაბეჭდავს 1 დან 10 მდე რიცხვებს 
// 3. შექმენით ფუნქცია(პარამეტრად გადაეცემა მასივი), რომელიც დაბეჭდავს მხოლოდ კენტ რიცხვებს ამ მასივიდან.

// 4.შექმენით ფუნქცია,რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს მასივის სახით ყველა ამ რიცხვის გამყოფს. მაგალითად, თუ პარამეტრად მიიღებს რიცხვს 10, უნდა დააბრუნოს [1,2,5,10]

///1
let masivi= [4,5,6,7,10];
let counter=0
for(let i=0; i<masivi.length; i++){
    counter+=masivi[i];
}
console.log(counter/masivi.length); 


///2
function printNumbers1(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}

printNumbers1();

///3
function rancxa(array){
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
}

rancxa([1,2,3,4,5,6]);

///4
function rancxa2(num){
    let answer=[];
    for(let i=0; i<=num; i++){
        if(num%i==0){
            answer.push(i);
        }
    }
    console.log(answer);
}

rancxa2(10);


////////////////////////////////////
///kubikebi

let kubikebi = document.getElementById('kubikebi');

function coloring(){
    event.target.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    event.target.style.transition= '0s';
}

function recolor(){
    event.target.style.backgroundColor='black';
    event.target.style.transition='2s';
}

for(let i=0; i<196; i++){
    var kubiki = document.createElement('div');
    kubikebi.appendChild(kubiki)
    kubiki.classList.add('kubiki');
    kubiki.addEventListener('mouseover', coloring);
    kubiki.addEventListener('mouseout' , recolor);
}


