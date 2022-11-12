// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("list"))

// console.log(document.getElementById("heading"))
// console.log(document.querySelectorAll("li"))

// var head=document.getElementById("heading")
// console.log(head.classList);
// head.classList.toggle("head")
// console.log(head.classList);


// // Get attributes set attributes

// var attributes=document.querySelector("h1");
// atclassname=attributes.getAttribute("class")
// console.log(atclassname);
// attributes.setAttribute("class" ,"changed")
// atclassname=attributes.getAttribute("class")
// console.log(atclassname);  output:headingattribute changed index.js:20


    // InnerHtml
// var ele=document.querySelector("h1")
// console.log(ele)
// console.log(ele.innerHTML) //InnerHtml <b class="bold">html</b> code
// ele.innerHTML="<strong>Haii innerhtml</strong>"
// console.log(ele.innerHTML) //<strong>Haii innerhtml</strong>

// //Inner Text
// var ele=document.querySelector("h2")
// console.log(ele.innerText) //Innertext html code
// ele.innerText="Hello innner text" //Hello innner text
// console.log(ele.innerText)

// //TextContent
// var ele=document.querySelector(".textcontent")
// console.log(ele.textContent) //TextContent html code
// ele.textContent="Hello text content" //Hello text content
// console.log(ele.textContent) 

//Event listners
// var ele=document.querySelector(".welcome")
// let old=ele.innerText;
// ele.addEventListener("mouseover",()=>{
//     ele.innerText="Welcome Back!!";
// })
// ele.addEventListener("mouseleave",()=>{
//     ele.innerText=old;
// })

// var ele=$(".welcome")
// ele.css("color","red")

// Promises
// function printalpha(alpha,time)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(alpha)
//             resolve("Promise has been resolved")
//         },time)
//     })
// }
    

// function printvowels()
// {
//     printalpha("A",2000)
//     .then(()=>printalpha("E",2000))
//     .then(()=>printalpha("I",1000))
//     .then(()=>printalpha("O",4000))
//     .then(()=>printalpha("U",1000))
// }
// printvowels()

// // function local()
// {
//     // let task=document.querySelector("#text").value;
//     // let tasks=localStorage.getItem("tasks") || [[]]
//     // console.log(task)
//     // localStorage.setItem('tasks',JSON.stringify([...JSON.parse(localStorage.getItem(tasks)) || [],task]))

    
// }

// objects
// let course={
//     id:10,
//     subject:'maths',
//     topic:['as','we','ewq'],
//     get:function (a) {

//         console.log(a);
//     }
// }

// course.get()

// Array destructor
// arr=[1,2,3,4]
// let [a,b,c,d,e=1]=arr
// console.log(a,b,c,d,e);

// array spread operator and rest operator

// function f(input1,...inputarray){
//     console.log("input1",input1);
//     console.log("input array",inputarray);
// }

// f(1,2,3,4,5,6,7,8,9,0)

//  array spread
// num1=[1,2,3,4,5]
// num2=[6,7,8,9,0]
// numcombined=[...num1,...num2]
// console.log(numcombined); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let [a,b,...remaining]=num1;
// console.log(remaining); //[3, 4, 5]

// Destructing in objects : It is based on properties of an object
// let obj1={id:1,
//           nameis:'sasi',
//           age:22,
//           place:'kadiri'
// }

// let {nameis,place}=obj1;
// console.log(nameis,place);