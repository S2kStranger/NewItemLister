var form=document.getElementById('addForm');
form.addEventListener('submit',additem);
var items=document.getElementById('items');
var filtertext=document.getElementById('filter');
filtertext.addEventListener('keyup',filterItems);
function additem(e)
{
    e.preventDefault(); 
    var text=document.getElementById('item').value;
    var desc=document.getElementById('description').value;
    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(text+" "+desc));
    document.getElementById('item').value='';
    document.getElementById('description').value=''; 
    
    
    //Adding Edit button
    var editbtn=document.createElement('button');
    editbtn.className="btn btn-secondary float-right btn-sm";
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    items.appendChild(li);
 
    //Adding delete button
    var delbtn=document.createElement('button');
    delbtn.className="btn btn-danger btn-sm float-right delete mr-1";
    delbtn.appendChild(document.createTextNode('X'));
    li.appendChild(delbtn);

    
}

//Functionality for delete button
items.addEventListener('click',removeItem);
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            items.removeChild(li);
        }
    }
}

function filterItems(e)
{
    var text=e.target.value.toLowerCase();
    var itemList=items.getElementsByTagName('li');
    //coverting itemList to an array
    Array.from(itemList).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    });
}
