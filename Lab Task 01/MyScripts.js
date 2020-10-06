var rIndex, table = document.getElementById("table");

function resetPerson() 
{
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
}

function addPerson()
 {

    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);

    var name = document.getElementById("name").value;
    
    var gender = document.getElementsByName("gender");
    var genderValue;
    for(var i = 0; i < gender.length; i++)
    {
        if(gender[i].checked)
        {
            genderValue = gender[i].value;
        }
    }
    
    var age  = document.getElementById("age").value;
    var city  = document.getElementById("city").value;
    
    cell1.innerHTML = name;
    cell2.innerHTML = genderValue;
    cell3.innerHTML = age;
    cell4.innerHTML = city;
    cell5.innerHTML = "<button class='btn btn-danger btn-group' onclick='deletePerson(this);'>Delete</button>  / <button class='btn btn-primary' onclick='selectPerson();'>Select</button>"

    selectPerson();
}

function deletePerson(name)
{
    try {
        var parent = name.parentNode.parentNode;
        parent.parentNode.removeChild(parent);
    }
    catch(e) {
        alert(e);
    }
}

function selectPerson() 
{
    for(var i=0; i<table.rows.length; i++) 
    {
        table.rows[i].onclick = function() 
        {
            rIndex = this.rowIndex;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("city").value = this.cells[3].innerHTML;
        }
    }
}

function updatePerson() 
{
    
    var name = document.getElementById("name").value;
    var gender = document.getElementsByName("gender");
    var genderValue;
    for(var i = 0; i < gender.length; i++)
    {
        if(gender[i].checked)
        {
            genderValue = gender[i].value;
        }
    }
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    table.rows[rIndex].cells[0].innerHTML = name;
    table.rows[rIndex].cells[1].innerHTML = genderValue;
    table.rows[rIndex].cells[2].innerHTML = age;
    table.rows[rIndex].cells[3].innerHTML = city;

}

