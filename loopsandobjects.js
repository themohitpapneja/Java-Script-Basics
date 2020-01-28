contacts=[
    {
        "name" : "mohit",
        "number" : "123456789"
    },
    {
        "name" : "lazzay",
        "number" : "12556789"
    },
    {
        "name" : "Mom",
        "number" : "1542256789"
    }
];


function lookup(name)
{
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i].name===name)
        {
            console.log("NUmber is " + contacts[i].number);
            break;
        }
        else{
            console.log("NAme not found");
            break;
        }
    }
}

lookup("hello");