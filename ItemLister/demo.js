// var headertitle=document.getElementById('header-title');
// headertitle.innerText="Item Listener";
// document.getElementById('main-header').style.borderBottom= 'solid 3px #000';
// var additem=document.getElementsByClassName('title');
// additem[0].style.fontWeight = "bold";
// additem[0].style.color = "green";
// var listitem=document.getElementsByClassName('list-group-item');
// listitem[2].style.backgroundColor ='green';
// for(var i=0;i<listitem.length;i++)
// {
//     listitem[i].style.fontWeight='bold';
// }
// var li=document.getElementsByTagName('li');
// li[4].style.fontWeight='bold';

// //Use of Query Selector
// var seconditem=document.querySelector("li:nth-child(2)");
// // seconditem.style.backgroundColor='green';
// var thirditem=document.querySelector("li:nth-child(3)");
// // thirditem.style.display='none';

// //Use of querySelectorAll

// var liitem=document.querySelectorAll(".list-group-item");
// liitem[1].style.color='green';
// var odditem=document.querySelectorAll('li:nth-child(odd)');
// console.log(odditem);
// for(var i=0;i<odditem.length;i++)
// {
//     odditem[i].style.backgroundColor='green';
// }

//Traversing the node
//Use of different parent , child and siblingnode
var itemList=document.querySelector("#items");
console.log(itemList);

//ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";

//ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="red";

//childnodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);
itemList.children[0].style.backgroundColor='yellow';

//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello Item 1';

//firstchild
console.log(itemList.firstChild);


//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello Item 4';

//lastchild
console.log(itemList.lastchild);

//nextsibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='grey';

//creating element
var newdiv=document.createElement('div');
console.log(newdiv);

//Add class,id,attribute
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','Hello Div');
console.log(newdiv);

//create newdiv text
var newdivtext=document.createTextNode("Hello World");
console.log(newdivtext);

//adding text to newdiv
newdiv.appendChild(newdivtext);
console.log(newdiv);

//Adding above Item Lister
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");

container.insertBefore(newdiv,h1);
newdiv.style.fontSize='30px';

//Adding Hello World before Helllo Item 1
//Creating element
var newli=document.createElement('li');
newli.className="list-group-item";
var newlitext=document.createTextNode("Hello World");
newli.appendChild(newlitext);
console.log(newli);

//Adding before Hello Item 1
var firstli=document.querySelector('.list-group-item');
var itemcontainer=document.querySelector('#items');
itemcontainer.insertBefore(newli,firstli);



