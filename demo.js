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
