let tryRemoveFromArray = function (array,value) {
    for (let i=0;i<array.length;i++){
        if (array[i] === value){
            array.splice(i,1)
        }
    }
    console.log(array)
}
let array = [1,2,3,4,5,6,7,8,9,10];
let array2 = [10,2,5,4,5,8,7,2,9,10];
let value = +prompt("Nhập vào 1 số: ")
tryRemoveFromArray(array,value)
tryRemoveFromArray(array2,value)