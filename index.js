// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the 
// other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === 0){
            newArr.push(arr[i])
        }else{
            newArr.unshift(arr[i])
        }
    }
    return newArr
}

moveZeros([false,1,0,1,2,0,1,3,"a"])

//Solution 2
const moveZeros = (arr) => {
    let filterdList = arr.filter((el) => el !== 0)
    let zeroList = arr.filter((el) => el === 0)
    return filterdList.concat(zeroList)
}

moveZeros([false,1,0,1,2,0,1,3,"a"])