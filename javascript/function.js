//square
function square(a){
    console.log(a*a)
}
square(6)

//print name,age 
function details(name ,age){
    console.log("i am",name,".i am",age,"years old")
}
details("Tamanna",22)


function multi(a){
    console.log(a**0.5)
}
multi(3)

//check your grade
function grade(marks){
    if(marks>=90){
    console.log("your grade is A++");
}
else if(90>marks>=70){
    console.log("your grade is  B");
}
else if(70>marks>=55){
    console.log("your grade is C");
}
else{
    console.log("your grade is D");

}
}
grade(90)

//print table(12)
function table(x){
    for(i=1;i<=10;i++){
        console.log(x+"x"+i+"="+x*i)
    }

}
table(12)