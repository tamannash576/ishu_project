/*const fruits=["banana","apple","mango","orange"]
console.log(fruits)
console.log(fruits[2])
fruits.push("kiwi","pineapple");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

// find sum
arr=[12,34,23,34,55,66]
let sum=0;
arr.forEach((item)=>{
    sum+=item;
})
console.log(sum);

arr=[1,2,3,4,5,6]
const getHighestvalue=(arr)=>{
    let max=arr[0];
    for(let i=0;i<=arr.length;i++)
        if(max<arr[i]){
            max=arr[i];
        }
        console.log(max);
    }
getHighestvalue(arr);*/

/*arr=[1,2,3,4,5]                                  //filter=array ke element ko filter krna based on condition. Basic synatx=array.filter(callbackfunction)
                                                   //callbackfunction ek function h jo har element pr call hota hai
console.log(arr.filter((item)=>{                   //curly braket k sath return lge ga ()iske sath nhi
    return item%2===0}))*/

//another way of filter
/*const arr=[1,2,3,4,5]
console.log(arr.filter(arr=>arr%2===0))*/


/*const obj=[
    {name:'tamanna',age:22},
    {name:'mahak',age:23},
    {name:'ishu',age:15},
    {name:'avisha',age:3},
]
console.log(obj.filter(item=>item.age>18))*/

//let arr=[1,2,3,4,5,6,4,3,2,2]
/*console.log(arr.sort((a,b)=>b-a))                    //sort=By default, yeh elements ko strings samajh ke unke Unicode values ke basis par sort karta hai — isliye numbers sort karne ke liye custom logic dena padta hai.
                                                      // array.sort([compareFunction])
 //sort with string
 let items = ['banana', 'apple', 'cherry'];
items.sort();
console.log(items);


let arr=[1,2,3,4,5,6,4,3,2,2]
console.log(arr.find((item)=>item>4))
console.log(arr.slice(2,4))                          //slice() method ka use array ke ek portion (slice) ko nikalne ke liye hota hai. Ye original array ko modify nahi karta, balki ek new array return karta hai.
console.log(arr.splice(1,2))*/                       //splice() ek powerful method hai jo array ke andar elements ko add, remove, ya replace karne ke liye use hota hai
//array.splice(start, deleteCount, item1, item2, ...)


/*const newarr=arr.map((item)=>{                       //map() method ka use kisi array ke har element pe ek function apply karke uska new array banane ke liye hota hai
    return item*item
})
console.log(newarr)*/


/*const obj=[
    {name:'tamanna',age:22},
    {name:'mahak',age:23},
    {name:'ishu',age:15},
    {name:'avisha',age:3},
]
console.log(obj.filter(item=>item.age<25 && item.age>18).map((item)=>{
    return item.name
}))*/



/*fruits=["banana","carrot","mango","orange"]
fruits.splice(2,2,'pineapple')
console.log(fruits)*/

//reduce
/*reduce() method ka use array ke sabhi elements ko ek single value mein combine (reduce) karne ke liye hota hai.
 Iska use aksar sum, product, average, max, grouping jaise operations ke liye hota hai.*/
//syntax=Array.reduce(callback,initial value)
/*(accumulator, currentValue, currentIndex, array)
accumulator – Result so far
currentValue – Abhi wala element
initialValue – Starting value (optional but recommended)*/

//reduce example
//Sum of Array Elements
/*const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);*/

/*const arr=[7,5,4,6,3,6,2]
console.log(arr.filter((a)=>{
    return a%2==0
}).map(item=>item*item).reduce((acc,curr)=>{
    return acc+curr
}))*/

/*const number=[1,2,5,6,4,3,7]
console.log(number.indexOf(5))*/


/*const number=[1,2,5,6,4,3,7]
const target=6;
console.log(number.indexOf(target))*/

//searching
/*let arr=[4,5,6,7,8,54,3,2]
let target=5
for(let i=0;i<arr.length-1;i++){
    if(arr[i]===target){
        console.log('index of 5 is',i)
         break;
}
}*/
