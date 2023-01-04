// querySelector
// with quary selector we can select Tag, Class, Id
// with quary selector will catch first tag, class, id // if there is 1 or more this will catch first one
// example of Tag
const tag1 = document.querySelector("h1");
console.log(tag1);
// example of class
const class1 = document.querySelector(".class1");
console.log(class1);
// example of Id
const id1 = document.querySelector("#id1");
console.log(id1);

// quary selector All
// This Provide us all h1 tag, class, id
// and return NODELIST in console
const tag2 = document.querySelectorAll("h1");
console.log(tag2);
// we can catch first h1 tag by giving 0 index
const tag3 = document.querySelectorAll("h1");
console.log(tag3[0].innerText);
// exmple class
const class2 = document.querySelectorAll(".class1");
console.log(class2);
// example ids
const id2 = document.querySelectorAll("#id1");
console.log(id2);
// different between getElementByTagName and querySelector
const tag4 = document.querySelectorAll("h1"); //it will give NodeList
console.log(tag4);
// getElementByTagName
const tag5 = document.getElementsByTagName("h1"); //it will give HTMLCollection
console.log(tag5);
// childnodes
const di3 = document.getElementById("di3");
console.log(di3.childNodes);

// DOM ELEMENT CHILDREN
const id4 = document.getElementById("list-id");
console.log(id4);
console.log(id4.children);
// How to ADD new list On list product
// create Element
const newList = document.createElement("li");
console.log(newList);
newList.innerHTML = "list 6";
console.log(newList.innerHTML);

// appendChild
// example 1
const newList1 = document.createElement("li");
// console.log(newList1);
newList1.innerText = "list 6";
const listid = document.getElementById("list-id");
listid.appendChild(newList1);
// example 2
const id6 = document.getElementById("id89");
const newheding = document.createElement("h1");
newheding.innerText = "This Is Heading 2023";
id6.appendChild(newheding);

// renove Child
const id7 = document.getElementById("id89");
const list = id7.children[0];
id7.removeChild(list);

// replace Child
const id8 = document.getElementById("id89");
const list1 = id8.children[0];
const newList2 = document.createElement("p");
newList2.innerText = "This Is Paragraph";
id8.replaceChild(newList2, list1);

// Title
console.log(document.title);
document.title = "New javaScript Class Ten";
// boby
// document.body.innerHTML = "<h1>This Is Heading Of the Body </h1> ";

// innerHTML
const id9 = document.getElementById("id1");
id9.innerHTML = "<h2>This Is Heading Two AND adding Paragrap</h2>";
