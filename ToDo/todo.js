


function addItem()
{
    var item= document.getElementById('input').value
    var ul=document.getElementById('list')
    
    var textnode=document.createTextNode(item)
    

    if (item!="")
    {
    //  create a li  
        li=document.createElement('li');

        // Create a checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')

        //create a label
        var label=document.createElement('label')
        
        // add items to the webpage
        ul.appendChild(label);
        
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.appendChild[0]);


       
    }
    else
    { alert("Enter a value");
    return false;
    }

}