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

console.log($(".welcome").text())
