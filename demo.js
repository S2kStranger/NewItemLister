var headertitle=document.getElementById('header-title');
headertitle.innerText="Item Listener";
document.getElementById('main-header').style.borderBottom= 'solid 3px #000';
var additem=document.getElementsByClassName('title');
additem[0].style.fontWeight = "bold";
additem[0].style.color = "green";
var listitem=document.getElementsByClassName('list-group-item');
listitem[2].style.backgroundColor ='green';
for(var i=0;i<listitem.length;i++)
{
    listitem[i].style.fontWeight='bold';
}
var li=document.getElementsByTagName('li');
li[4].style.fontWeight='bold';

//Use of Query Selector
var seconditem=document.querySelector("li:nth-child(2)");
// seconditem.style.backgroundColor='green';
var thirditem=document.querySelector("li:nth-child(3)");
// thirditem.style.display='none';

//Use of querySelectorAll

var liitem=document.querySelectorAll(".list-group-item");
liitem[1].style.color='green';
var odditem=document.querySelectorAll('li:nth-child(odd)');
console.log(odditem);
for(var i=0;i<odditem.length;i++)
{
    odditem[i].style.backgroundColor='green';
}


