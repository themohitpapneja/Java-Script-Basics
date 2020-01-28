const source=[1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
    const [ , , ...arr]=list;

    return arr;
}

console.log(removeFirstTwo(source));