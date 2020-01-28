var myStorage={

    "car":{
        "inside":{
            "glovebox" : "maps",
            "passenger seat":"crumbs"
             },
    "outside":{
        "trunk":"jack"
    }

    }
};

var gloveBoxContents = myStorage.car.inside.glovebox;

console.log(gloveBoxContents);
