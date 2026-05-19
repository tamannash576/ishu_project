//operators
/*let a=23;
let b=34;
let c=54;
let d=2;
console.log(a+b*c);//Arithmatic operator
console.log(a%2);
console.log(a>b && a>c );//logical operator
console.log(a>b || b<c );
console.log(~b );
console.log(a<b );//comparison operator
console.log(c>b );
console.log(a+=b );//assignment operator
console.log(a-=d );
*/
const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8]
//console.log(arr.filter(arr => arr % 2 == 0)
console.log(arr.reduce((acc, curr) => {
    return acc + curr
}))
