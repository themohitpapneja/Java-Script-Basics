 var collection= {
    "2548":{
        "album":"slippery when wet",
        "artist":"Bon jovi",
        "tracks":[
            "Let it rock",
            "you give love a bad name"
        ]
    },

    "2468":{
        "album":"1999",
        "artist":"prince",
        "tracks":[
            "1999",
            "red corvett"
        ]
    },

    "1245":{
        artist:"Robert Palmer",
        tracks:[]
    },

    5439:{
        album:"abba gold"
    }
 };
 
// a fancy way in javascript to create
// copy of an object in js
//keep a copy of collection for tests
var collectioncopy=JSON.parse(JSON.stringify(collection));
function updateRecords(id,prop,value){

    if(value ===""){
        delete collection[id][prop];
    }
    else if(prop==="tracks"){
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;
}
updateRecords(1245,"tracks","mohit")
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));